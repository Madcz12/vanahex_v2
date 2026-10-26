# Reglas del Proyecto — React SPA

Estas reglas aplican a todos los proyectos React SPA creados bajo esta arquitectura.
El agente debe seguirlas en cada generación de código, refactoring o sugerencia.

---

## 1. Stack Tecnológico

- **Framework:** React 18+ con Vite como bundler
- **Routing:** React Router DOM v6 (nunca v5)
- **Estilos:** Bootstrap 5 vía CDN + Animate.css para transiciones
- **Query strings:** librería `query-string` para parseo de parámetros en URL
- **Testing:** Jest + @testing-library/react + jest-environment-jsdom
- **Transpiler para tests:** Babel con @babel/preset-env y @babel/preset-react
- **Linter:** ESLint con plugins react, react-hooks y react-refresh
- **NO usar:** Redux, MobX, Zustand ni ninguna librería externa de estado global

---

## 2. Arquitectura de Carpetas

Usar **Feature-Based Architecture**: cada módulo funcional es autocontenido.

```
src/
  <modulo>/
    components/     ← Componentes visuales del módulo
    context/        ← Context, Provider y Reducer (si aplica)
    data/           ← Datos estáticos o constantes del módulo
    helpers/        ← Funciones puras utilitarias
    hooks/          ← Custom hooks específicos del módulo
    pages/          ← Páginas/vistas del módulo
    routes/         ← Rutas internas del módulo
    types/          ← Constantes de action types
    index.js        ← Barrel export del módulo
  hooks/            ← Custom hooks globales/reutilizables
  router/           ← AppRouter, PrivateRoute, PublicRoute
  ui/               ← Componentes compartidos (Navbar, etc.)
  HeroesApp.jsx     ← Componente raíz
  main.jsx          ← Entry point
```

**Regla:** Nunca crear archivos sueltos en `/src` fuera de esta estructura.
**Regla:** No organizar por tipo de archivo (no tener un único `/components` global).

---

## 3. Barrel Exports

- Cada carpeta (`components/`, `pages/`, `helpers/`, etc.) debe tener su propio `index.js`
- El `index.js` solo contiene re-exports: `export * from './NombreArchivo'`
- Los imports siempre deben apuntar al `index.js` de la carpeta, no al archivo individual

```js
// ✅ Correcto
import { HeroCard, HeroList } from '../components'
import { LoginPage } from '../auth'

// ❌ Incorrecto
import { HeroCard } from '../components/HeroCard'
import { LoginPage } from '../auth/pages/LoginPage'
```

---

## 4. Componentes

- **Solo Function Components.** Nunca Class Components.
- Nombre de componentes en **PascalCase** (`HeroCard`, `LoginPage`)
- Nombre de archivos igual al componente: `HeroCard.jsx`
- Archivos de lógica pura (helpers, hooks, types) con extensión `.js`
- Archivos con JSX siempre con extensión `.jsx`
- **No usar PropTypes.** Preferir TypeScript para tipado; si el proyecto es JS puro, documentar con JSDoc.
- Nunca dejar `console.log` en componentes de producción (solo en desarrollo, claramente marcados)

---

## 5. Estado Global — Context API + useReducer

Usar este patrón para cualquier estado compartido entre módulos:

```
context/
  NombreContext.jsx     ← createContext({})
  NombreProvider.jsx    ← useReducer + funciones expuestas + Provider
  nombreReducer.js      ← Función pura, switch por action.type
  index.js
types/
  types.js              ← Constantes: { accion: '[MODULO] Descripcion' }
```

**Reglas:**
- El reducer es siempre una función pura (sin side effects)
- El Provider maneja todos los side effects (localStorage, fetch, etc.)
- Los action types siguen el formato `'[MODULO] Descripcion'` (ej: `'[AUTH] Login'`)
- La inicialización del estado con `localStorage` va en la función `init` del `useReducer`

```js
// ✅ Patrón correcto
const [state, dispatch] = useReducer(reducer, initialState, init)

const init = () => {
  const data = JSON.parse(localStorage.getItem('clave'))
  return { logged: !!data, user: data }
}
```

---

## 6. Routing y Guardas de Ruta

### AppRouter
- Definir rutas públicas con `<PublicRoute>` y privadas con `<PrivateRoute>`
- Cada módulo define sus propias rutas internas en `routes/ModuloRoutes.jsx`
- La ruta raíz `/` siempre redirige a la ruta principal con `<Navigate>`

### PrivateRoute
- Si el usuario no está autenticado, guardar la ruta actual en `localStorage` como `lastPath`
- Redirigir a `/login`

```js
const lastPath = pathname + search
localStorage.setItem('lastPath', lastPath)
return logged ? children : <Navigate to="/login" />
```

### PublicRoute
- Si el usuario ya está autenticado, redirigir a la ruta principal (ej: `/home`)
- Si no está autenticado, renderizar `children`

```js
return !logged ? children : <Navigate to="/home" />
```

### Post-login
- Al hacer login, leer `lastPath` de `localStorage` y navegar ahí con `replace: true`

---

## 7. Custom Hooks

- Todos los custom hooks globales van en `src/hooks/`
- Los hooks específicos de un módulo van en `src/<modulo>/hooks/`
- Nombre siempre con prefijo `use`: `useForm`, `useAuth`, `useHeroes`
- Deben ser genéricos y reutilizables; si solo sirve para un componente, la lógica va en ese componente

**Patrón useForm obligatorio para formularios:**

```js
const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({ ...formState, [name]: value })
  }

  const onResetForm = () => setFormState(initialForm)

  return { ...formState, formState, onInputChange, onResetForm }
}
```

---

## 8. Optimización — useMemo y useCallback

- Usar `useMemo` para operaciones de filtrado o búsqueda sobre arrays de datos
- La dependencia debe ser la variable que dispara el recálculo

```js
// ✅ Correcto
const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
```

- Usar `useCallback` para funciones que se pasan como props a componentes hijos
- **No sobre-usar:** solo aplicar cuando hay evidencia de re-renders innecesarios

---

## 9. URL State (Query Strings)

- Para búsquedas y filtros, usar la URL como fuente de verdad (`?q=batman`)
- Parsear con `query-string`: `const { q = '' } = queryString.parse(location.search)`
- Actualizar la URL con `navigate('?q=' + valor)` sin recargar la página
- El input del formulario se inicializa con el valor del query param

---

## 10. Testing

### Estructura
```
tests/
  <modulo>/
    context/
    pages/
    types/
  router/
  ui/
    components/
```
La carpeta `tests/` espeja exactamente la estructura de `src/`.

### Convenciones
- Nombre de archivo: `NombreComponente.test.jsx` o `nombreHelper.test.js`
- Cada `describe` describe el componente: `describe('Pruebas en <Navbar/>', () => {})`
- Cada `test` describe el comportamiento esperado en español

### Mocking obligatorio
- Siempre mockear `useNavigate` en tests de componentes con navegación:
```js
const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))
```
- Siempre envolver el componente bajo test con su `Context.Provider` pasando un `contextValue` mockeado
- Usar `MemoryRouter` con `initialEntries` para simular rutas específicas

### Cobertura mínima esperada
- Reducers: todas las acciones del switch
- Route guards: caso autenticado y no autenticado
- Navbar y componentes con interacción: evento de click y sus efectos

---

## 11. Convenciones de Nombres

| Elemento | Convención | Ejemplo |
|---|---|---|
| Componentes | PascalCase | `HeroCard`, `LoginPage` |
| Hooks | camelCase con prefijo `use` | `useForm`, `useAuth` |
| Helpers | camelCase | `getHeroById`, `getHeroesByName` |
| Action types | `'[MODULO] Verbo'` | `'[AUTH] Login'` |
| Archivos JSX | PascalCase.jsx | `HeroCard.jsx` |
| Archivos lógica | camelCase.js | `authReducer.js` |
| Carpetas módulo | camelCase | `auth/`, `heroes/` |
| Assets | kebab-case | `dc-batman.jpg` |

---

## 12. Lo que está prohibido

- ❌ Class Components
- ❌ Redux, Zustand, MobX u otras librerías de estado global
- ❌ Imports directos a archivos (saltarse los barrel exports)
- ❌ `console.log` en código de producción
- ❌ Archivos de componentes con extensión `.js` (deben ser `.jsx`)
- ❌ Organizar por tipo de archivo en vez de por dominio
- ❌ `useEffect` para lógica que puede ir en un evento o en `useMemo`
- ❌ Modificar el `index.html` para cargar scripts que no sean Bootstrap o Animate.css
