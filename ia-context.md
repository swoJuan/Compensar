# IA Context - Documentacion de componentes

## Objetivo del sistema de documentacion

El portal documenta componentes del sistema de diseno Compensar para QA y desarrolladores. Debe mantener una base reutilizable para futuros componentes, con informacion accionable, ejemplos reales, criterios de accesibilidad, tokens usados y checklist de validacion.

La pagina del componente Boton queda como referencia base para construir futuras paginas de componentes. Cualquier nuevo componente debe seguir la misma estructura, ajustando solo las secciones que no apliquen.

## Fuente Figma revisada

- Archivo: `Compensar v2 - Sistema de diseno`
- File key: `1zVGMpzqBgiBUqhmfFEAoT`
- Nodos revisados:
  - `5065:10698` - botones variaciones
  - `4498:2274` - 2.1 Buttons
  - Subcapas inspeccionadas: `4504:5583` medidas, `4504:5947` contenido, `4498:2674` recomendaciones, `4514:7131` accesibilidad.

## Decisiones principales encontradas en Figma para Boton

### Tokens y estilos base

- Nombre de componente: `mp-button`.
- Variante base interna: `.master button`.
- Fuente del label: Roboto Bold.
- Tamano de label: 16px.
- Peso del label: 700.
- Line-height del label: 1.
- Letter spacing del label en Figma: 0.352px aprox.
- Radio: `border-radius/md`, valor 24px.
- Color primario: gradiente vertical `#FF6600` a `#E63F0C`, asociado a `base-brand-80` y `base-brand-90`.
- Texto sobre primario: `use/text/on-dark/primary`, blanco.
- Superficie de ejemplos: `Neutral (Escala Grises)/10`, `#F5F5F5`.

### Medidas y espaciado del boton

- Altura primario/secundario/especial: 48px.
- Altura terciario: 32px.
- Ancho: hug content.
- Direccion: horizontal.
- Alineacion: center.
- Icono en instancia inspeccionada: 24px.
- Figma tambien registra regla de contenido: iconos deben ser de 16px o 20px. Pendiente por validar con diseno porque la instancia visible del componente usa 24px.
- Gap entre icono y texto: 16px.
- Area tactil minima: 44px.

### Variaciones anatomicas obligatorias del boton

- Icono + texto + icono:
  - width de ejemplo: 156px.
  - height: 48px.
  - padding: 12px vertical, 16px horizontal.
  - gap: 16px.
  - iconos: 24px en la instancia inspeccionada.
  - label de ejemplo: 44px.
- Texto + icono:
  - width de ejemplo: 132px.
  - height: 48px.
  - padding-left: 32px.
  - padding-right: 16px.
  - padding vertical: 12px.
  - gap: 16px.
- Icono + texto:
  - width de ejemplo: 132px.
  - height: 48px.
  - padding-left: 16px.
  - padding-right: 32px.
  - padding vertical: 12px.
  - gap: 16px.
- Solo texto:
  - width de ejemplo: 108px.
  - height: 48px.
  - padding horizontal: 32px.
  - padding vertical: 16px.
- Solo icono:
  - width de ejemplo: 56px.
  - height: 48px.
  - padding horizontal: 16px.
  - padding vertical: 12px.
  - requiere `aria-label` descriptivo.

### Variantes y estados

- Variantes documentadas: primario, secundario, terciario y especial.
- Estados observados: por defecto, hover, presionado/active, focus y deshabilitado.
- Loading aparece en la referencia de pagina aportada por el usuario, pero no quedo claramente especificado en el nodo Figma inspeccionado. Pendiente por validar como estado oficial del componente.
- Error, success, selected y expanded/collapsed no aplican al boton base salvo que un producto cree un patron compuesto.

### Modos de color

- Light: modo principal.
- Dark: fondos oscuros, textos claros, contraste equilibrado, mantiene identidad visual.
  - Subnodo Figma revisado: `4514:6801`.
  - Tokens observados: `use/surface/white` `#292929`, `use/primary/default dark` `#ff9d5c`, texto secundario/on-dark `#f5f5f5`, texto inverso `#111111`.
- High Contrast: mayor contraste, reduccion de colores intermedios y mayor claridad en elementos interactivos.
  - Subnodo Figma revisado: `4514:7068`.
  - Tokens observados: `use/surface/white` `#000000`, `use/text/primary` `#ffffff`, `use/text/inverse` `#000000`, `use/primary/default` `#ffff00`, `use/text/link` `#ffff00`.
  - Aplicacion en boton: primario con fondo amarillo `#ffff00` y texto negro; secundario con fondo negro, borde/texto amarillo; terciario con fondo negro y texto amarillo.

### Reglas de contenido

- Un boton puede contener: texto, icono, icono + texto.
- Reglas observadas:
  - El contenido debe estar centrado.
  - Minimo 2 caracteres de texto.
  - Usar lenguaje claro y directo.
  - Evitar textos ambiguos.
  - Complementar iconos con texto cuando sea necesario.
  - Primera letra en mayuscula y resto en minuscula. Ejemplo: "Mis citas".

### Accesibilidad

- Mantener contraste minimo 4.5:1.
- Asegurar area tactil minima de 44px en elementos interactivos.
- Incluir estados visibles: hover, focus, active.
- No depender unicamente del color para comunicar informacion.
- Garantizar legibilidad en Light, Dark y High Contrast.
- Todos los elementos interactivos deben ser accesibles con teclado.
- El estado focus debe ser visible y consistente.
- Las acciones deben tener feedback inmediato visual o de estado.
- Botones solo icono deben tener etiqueta accesible (`aria-label`).

## Decisiones principales encontradas en Figma para Checkbox / Radio / Switch

- Nodo Figma revisado: `4540:38053` - `2.5 — Checkbox / Radio / Switch`.
- Son componentes transversales y productivos; sus estilos deben vivir en `core/components/web/_selection-controls.scss`.
- La documentacion vive en `docs/transversales/components/selection-controls.html` y sus estilos propios en `portal/pages/_selection-controls.scss`.
- Fuente de label: Roboto Regular.
- Tamano de label: 16px.
- Line-height del label: 1.5.
- Letter spacing observado: 0.16px aprox.
- Gap entre control y label:
  - Checkbox: 8px.
  - Radio: 8px.
  - Switch: 10px.
- Area clicable minima: 44px.
- Checkbox:
  - State layer / area interactiva: 44 x 44px.
  - Icono/control: 24px.
  - Caja visual interna: 18px.
  - Radio visual de caja: 2px.
  - Uso: seleccion multiple.
- Radio:
  - State layer / area interactiva: 44 x 44px.
  - Icono/control: 24px.
  - Caja visual interna: 18px.
  - Uso: seleccion unica dentro de un grupo.
- Switch:
  - Area del control: 52 x 40px.
  - Track: 52 x 32px.
  - Knob: 28px.
  - Desplazamiento del knob: 20px.
  - Uso: activacion o desactivacion inmediata.
- Estados documentados: por defecto, seleccionado, error, disabled y focus.
- Modos documentados: Light, Dark y Alto contraste.
- Reglas de accesibilidad observadas:
  - Label asociado al control.
  - Focus visible obligatorio.
  - No depender solo del color.
  - Interaccion por teclado.
  - Radio buttons deben compartir `name` cuando pertenecen al mismo grupo.

## Decisiones principales encontradas en Figma para Alertas

- Nodo Figma revisado: `4574:1918` - `2.6 — Alerts / Messages completo`.
- Subnodos revisados:
  - `4588:19459` - alerta contextual con medidas y anatomia.
  - `4589:21376` - tipos info, success, warning y error.
  - `4585:19287` - modos Light, Dark y Alto contraste.
- Es un componente transversal y productivo; sus estilos deben vivir en `core/components/web/_alerts.scss`.
- La documentacion vive en `docs/transversales/components/alerts.html` y sus estilos propios en `portal/pages/_alerts.scss`.
- Excepcion de documentacion: Alertas tiene tres tipos dentro del sistema. Cada pagina de alerta debe declarar explicitamente que tipo documenta y agregar una zona "donde se usa" antes del resumen.
- Esta pagina documenta unicamente la alerta `Contextual (Inline / Banner)`.
- Nombre de componente productivo definido: `.mp-alert`.
- Variantes oficiales:
  - `.mp-alert--info`
  - `.mp-alert--success`
  - `.mp-alert--warning`
  - `.mp-alert--error`
  - `.mp-alert--dismissible` cuando tenga accion de cierre.
- El componente comunica informacion relevante sobre una accion, validacion o estado del sistema dentro del flujo de lectura.
- Uso contextual: no bloquea la interaccion, aparece cerca del contenido relacionado y puede ser persistente.
- Zona "donde se usa" obligatoria para este tipo:
  - Caracteristicas: no bloquea la interaccion, aparece cerca del contenido relacionado y puede ser persistente.
  - Ubicacion: dentro de formularios, bajo o sobre el elemento afectado, en bloques o secciones especificas y siempre visible en el flujo de lectura.
  - Debe incluir un diagrama visual simple que muestre la alerta integrada en desktop y mobile.
- Medidas observadas:
  - Ancho de ejemplo: 361px.
  - Alto de ejemplo: 78px en hug content.
  - Padding interno: 16px.
  - Borde: 1px.
  - Radio: 12px.
  - Icono: 32 x 32px.
  - Gap entre icono y contenido:
    - Info: 8px.
    - Error: 8px.
    - Success: 16px.
    - Warning: 16px.
  - Gap entre titulo y cuerpo: 4px.
- Tipografia:
  - Titulo: Roboto SemiBold 16px, line-height 1.3.
  - Cuerpo: Roboto Regular 14px, line-height 1.5.
- Tokens y colores Light observados:
  - Info: fondo `use/state/info/bg` `#e6f1fb`, borde `use/state/info/border` `#6c9fd0`, texto `use/state/info/text` `#2d4a67`.
  - Success: fondo `use/state/success/bg` `#e6f7e8`, borde `use/state/success/border` `#44bd75`, texto `use/state/success/text` `#0d3d1f`.
  - Warning: fondo `use/state/warning/bg` `#fff2d9`, borde `use/state/warning/border` `#fcce72`, texto `use/state/warning/text` `#111111`.
  - Error: fondo `use/state/error/bg` `#f7eeed`, borde `use/state/error/border` `#db7165`, texto `use/state/error/text` `#521a14`.
- Tokens y colores Dark observados:
  - Info: fondo `#18428f`, borde `#296ff0`, texto `#f5f5f5`.
  - Success: fondo `#0b853d`, borde `#22a152`, texto `#f5f5f5`.
  - Warning: fondo `#967229`, borde `#fcbf44`, texto `#f5f5f5`.
  - Error: fondo `#7d291f`, borde `#d14434`, texto `#f5f5f5`.
- Tokens y colores Alto contraste observados:
  - Info: fondo `#102c5e`, borde `#296ff0`, texto `#ffffff`.
  - Success: fondo `#0d3d1f`, borde `#22a152`, texto `#ffffff`.
  - Warning: fondo `#634a1a`, borde `#fcbf44`, texto `#ffffff`.
  - Error: fondo `#521a14`, borde `#d14434`, texto `#ffffff`.
- Reglas de comportamiento:
  - Aparece tras una accion, evento o validacion.
  - Debe ser clara y visible.
  - No debe bloquear la interaccion innecesariamente.
  - Puede ser persistente o temporal si el patron que lo usa lo permite.
- Reglas de contenido:
  - Usar el tipo correcto segun contexto.
  - No abusar de mensajes en pantalla.
  - Priorizar claridad sobre cantidad de informacion.
  - Mostrar solo mensajes relevantes.
  - Evitar duplicar mensajes para la misma accion.
- Accesibilidad:
  - Contraste minimo 4.5:1.
  - No depender solo del color.
  - Incluir icono y texto.
  - Permitir cierre accesible por teclado cuando aplique.
  - Usar `role="status"` para informacion contextual y `role="alert"` para errores que requieren atencion.

## Decisiones principales encontradas en Figma para Toast

- Nodo Figma revisado: `4590:22197` - `2.6.2 — Toast (Temporal / Flotante)`.
- Subnodos revisados:
  - `4590:22281` - caracteristicas, ubicacion y maqueta de uso.
  - `4590:22212` - anatomia.
  - `4595:27603` - dimensiones y medidas internas.
- Es un componente transversal y productivo; sus estilos deben vivir en `core/components/web/_toasts.scss`.
- La documentacion vive en `docs/transversales/components/toasts.html` y sus estilos propios en `portal/pages/_toasts.scss`.
- Nombre de componente productivo definido: `.mp-toast`.
- Variantes oficiales:
  - `.mp-toast--info`
  - `.mp-toast--success`
  - `.mp-toast--warning`
  - `.mp-toast--error`
  - `.mp-toast-region` para la region flotante.
- Tipo documentado: `Toast (Temporal / Flotante)`.
- Caracteristicas:
  - Flota sobre la interfaz.
  - No bloquea la interaccion.
  - Tiene alta visibilidad con baja intrusion.
  - Desaparece automaticamente.
- Ubicacion:
  - Elemento flotante, no hace parte del layout.
  - Posicion recomendada: esquina superior derecha.
  - En mobile ocupa el ancho disponible con margen lateral.
- Comportamiento:
  - Aparece tras una accion del usuario o evento del sistema.
  - Se puede cerrar manualmente.
  - Se cierra automaticamente en 5 segundos para esta implementacion.
  - Figma menciona 3 a 5 segundos segun longitud del contenido; el sistema adopta 5 segundos como regla base.
  - Evitar multiples toast simultaneos; maximo 1 a 2 visibles al mismo tiempo.
- Medidas observadas:
  - Figma muestra ancho fijo de ejemplo de 427px.
  - Regla productiva definida por el sistema: ancho maximo 350px.
  - Alto de ejemplo: 78px.
  - Padding: 16px.
  - Gap principal: 16px.
  - Radio: 12px.
  - Icono: 32 x 32px.
  - Boton de cierre: 24 x 24px.
  - Gap entre titulo y mensaje: 4px.
- Tipografia:
  - Titulo: Roboto SemiBold 16px, line-height 1.3.
  - Mensaje: Roboto Regular 14px, line-height 1.5.
- Tokens y colores:
  - Reutiliza los tokens de estado de Alertas: `use/state/info/*`, `use/state/success/*`, `use/state/warning/*`, `use/state/error/*`.
  - Reutiliza los modos Light, Dark y Alto contraste definidos para mensajes de estado.
- Reglas de uso:
  - Usar solo para mensajes breves.
  - No usar para errores criticos.
  - No usar para decisiones del usuario.
  - Evitar multiples toast simultaneos.
- Accesibilidad:
  - Debe ser visible sin bloquear contenido.
  - Usar region `aria-live="polite"` para feedback no critico.
  - No desaparecer demasiado rapido; base de 5 segundos.
  - Permitir cierre manual con `aria-label`.
  - Mantener contraste adecuado y no depender solo del color.

## Decisiones principales encontradas en Figma para Modal

- Nodo Figma revisado: `4595:28317` - `2.6.3 — Modal (Critico)`.
- Subnodos revisados:
  - `4595:28332` - anatomia.
  - `4595:31047` - medidas del ejemplo.
- Es un componente transversal y productivo; sus estilos deben vivir en `core/components/web/_modals.scss`.
- La documentacion vive en `docs/transversales/components/modals.html` y sus estilos propios en `portal/pages/_modals.scss`.
- Nombre de componente productivo definido: `.mp-modal`.
- Base estructural obligatoria: Bootstrap 5 modal.
  - `.modal`
  - `.modal-dialog`
  - `.modal-dialog-centered`
  - `.modal-content`
  - `.modal-sm` para pequeno.
  - `.modal-lg` para grande.
- Variantes oficiales:
  - `.mp-modal--info`
  - `.mp-modal--success`
  - `.mp-modal--warning`
  - `.mp-modal--error`
- Tipo documentado: `Modal (Critico)`.
- Caracteristicas:
  - Bloquea la interaccion con el fondo.
  - Se muestra sobre overlay `#111111` con opacidad 30%.
  - Requiere accion del usuario.
  - Tiene alta prioridad visual.
- Ubicacion:
  - Centrado en pantalla.
  - Sobre fondo oscuro overlay.
  - Nivel mas alto de jerarquia visual.
- Medidas observadas:
  - Ancho de ejemplo / mediano: 479px.
  - Altura de ejemplo: entre 312px y 335px segun contenido.
  - Padding interno: 24px.
  - Gap interno: 24px.
  - Borde: 1px `use/border/default` `#cccccc`.
  - Radio del contenedor: 12px.
  - Sombra: `2px 5px 16px rgba(0,0,0,.15)`.
  - Icono de estado: contenedor 64 x 64px.
  - Icono interno: 32px.
  - Borde del icono: 5px.
  - Boton de cierre: 32 x 32px.
  - Posicion de cierre observada: top 19px, right 23px.
- Tipografia:
  - Titulo: Roboto Bold 28px, line-height 1.2.
  - Mensaje: Roboto Regular 18px, line-height 1.3.
- Tamanos ideales definidos para web:
  - Pequeno: `.modal-sm`, ancho maximo 300px. Para confirmaciones cortas.
  - Mediano: default Compensar, ancho maximo 479px. Es el tamano oficial observado en Figma.
  - Grande: `.modal-lg`, ancho maximo 800px. Para flujos guiados o contenido breve ampliado.
- Reglas de uso:
  - Usar solo cuando la interrupcion sea necesaria.
  - No usar multiples modales simultaneamente.
  - Limitar a una accion primaria.
  - Evitar contenido largo o complejo.
  - Mantener mensajes claros y accionables.
- Cuando no usar:
  - Informacion simple: usar alerta contextual.
  - Confirmacion rapida: usar toast.
  - Listas largas: usar pagina o vista dedicada.
  - Acciones secundarias de baja prioridad.
- Comportamiento:
  - Se abre tras una accion.
  - Bloquea el fondo con overlay.
  - Cierra con boton principal cuando aplique, accion secundaria, boton X o tecla ESC.
  - Debe mantener el foco dentro del modal mientras este abierto.
  - Debe devolver el foco al elemento que lo disparo al cerrarse.
- Accesibilidad:
  - Usar `role="dialog"` y `aria-modal="true"`.
  - Conectar titulo con `aria-labelledby`.
  - Conectar mensaje con `aria-describedby`.
  - Mantener focus trap.
  - Permitir cierre con ESC.
  - Garantizar contraste en Light, Dark y Alto contraste.
  - No depender unicamente del color para comunicar el tipo.

## Estructura obligatoria para todos los componentes

Todos los componentes del sistema de diseno deben documentarse siempre con esta estructura, en este orden:

1. Header superior
2. Breadcrumb
3. Hero del componente
4. Resumen
5. Anatomia interactiva
6. Variantes / Playground
7. Estados
8. Comportamiento
9. Guias de contenido
10. Accesibilidad
11. Responsive
12. Tokens usados
13. Codigo
14. Checklist QA
15. Issues / soporte / actualizacion

## Reglas de fidelidad al Figma

Todo desarrollo futuro debe revisar Figma antes de implementar y respetar medidas disponibles de:

- margenes
- paddings
- gaps
- tamanos de fuente
- pesos tipograficos
- tamanos de iconos
- alturas
- radios
- tokens
- estados
- variantes
- estructura visual general

No se deben inventar medidas si estan disponibles en Figma. Si alguna medida, variante o comportamiento no esta claro, debe registrarse como "pendiente por validar" en este archivo o en la seccion tecnica correspondiente.

## Reglas para anatomia interactiva

Todo componente con estructura visual debe tener una anatomia interactiva o visual. Debe mostrar partes, estructura interna, labels o callouts, medidas clave, espaciados, areas clicables, estados relevantes y variaciones estructurales.

Para botones, la anatomia debe incluir:

- solo texto
- icono + texto
- texto + icono
- icono + texto + icono
- solo icono

Cada variacion debe reflejar paddings, gaps, alturas, radios e iconos definidos en Figma.

## Reglas para playground interactivo

Cada componente debe permitir explorar sus propiedades principales y actualizar:

- preview
- codigo
- tokens
- estados si aplica

Para Boton, el playground debe permitir cambiar variante, estado, tema, anatomia, full width y label editable.

## Regla obligatoria: core vs portal

Los componentes del sistema de diseno deben construirse en `core`. Esto incluye CSS productivo, clases publicas, variantes, estados, anatomias, tokens aplicados y comportamiento reutilizable cuando aplique.

El portal debe contener unicamente documentacion: layout de la pagina, ejemplos, anatomias visuales, playgrounds, tablas, callouts, textos de soporte y JS necesario para actualizar la documentacion. El portal no debe redefinir clases productivas del componente, por ejemplo `.mp-btn`; debe consumir las clases reales publicadas desde `core`.

Si un componente futuro requiere JavaScript productivo reutilizable, debe vivir en `core` o en la capa reutilizable acordada para componentes. El JavaScript del portal solo debe orquestar previews, tabs, copiado de codigo y controles documentales.

Las paginas en `docs/` deben renderizar componentes reales del core. Si una medida de Figma no tiene token existente en core, se debe registrar como pendiente por validar antes de crear o aproximar un token.

## Nomenclatura CSS oficial

La API oficial de componentes usa prefijo `mp-` y variantes en espanol, alineadas con Figma y con la documentacion del sistema:

- `.mp-btn`
- `.mp-btn--primario`
- `.mp-btn--secundario`
- `.mp-btn--terciario`
- `.mp-btn--especial`

Las clases Bootstrap o legacy como `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-ghost` y `.btn-danger` solo pueden mantenerse como compatibilidad para ejemplos antiguos o integraciones existentes. No son la fuente de verdad para nuevos componentes.

Todo nuevo componente debe evitar mezclar APIs productivas en ingles y espanol dentro del mismo componente. Si existe una nomenclatura en Figma en espanol, la clase productiva del sistema debe conservar esa convencion.

## Regla obligatoria de uso del componente Boton

Desde el 4 de mayo de 2026, todo boton usado en la documentacion web del sistema de diseno debe consumir el componente oficial recien definido:

- Clase base obligatoria: `.mp-btn`.
- Variante obligatoria segun jerarquia: `.mp-btn--primario`, `.mp-btn--secundario`, `.mp-btn--terciario` o `.mp-btn--especial`.
- Anatomia obligatoria cuando aplique: `.mp-btn--icon-left`, `.mp-btn--icon-right`, `.mp-btn--icon-both` o `.mp-btn--icon-only`.

Las clases documentales o funcionales del portal, por ejemplo clases para tabs, copiado, filtros o descargas, pueden mantenerse solo como hooks de layout, JS o estado visual; no deben reemplazar la API `.mp-btn`.

Queda prohibido crear nuevos botones web con APIs legacy como `.btn`, `.btn-primary`, `.copy-btn`, `.ct-download-btn`, `.ic-pop-btn` o similares si no incluyen tambien `.mp-btn` y una variante oficial. Los snippets de codigo que muestren botones tambien deben usar `.mp-btn`.

## Regla de descargas por componente

Cada pagina de componente debe incluir una descarga clara para desarrollo y QA cuando el componente tenga estilos productivos en `core`. La descarga debe ofrecer, como minimo:

- CSS plano.
- Sass plano.
- JSON de tokens, clases, anatomias y modos.

Los archivos descargables deben estar unidos a la definicion del `core`, usar tokens reales de Figma y mantener la nomenclatura oficial `.mp-*`. Deben estar organizados por modo cuando aplique: Light, Dark y High Contrast.

La descarga debe ser facil de leer para dummy/demo: sin mixins, sin abstracciones complejas y sin clases inventadas fuera de la API oficial. Si algun valor no existe en Figma o core, debe quedar marcado como pendiente por validar antes de publicarlo como token oficial.

## Regla de visualizadores de codigo

Los visualizadores interactivos de codigo en paginas de componente deben mostrar:

- HTML: solo el fragmento semantico del componente, sin shell, header ni estilos del portal.
- CSS: la personalizacion completa del componente desde `core`, con clases publicas, variables necesarias, estados, variantes y modos. No debe ser solo una lista de clases ni solo tokens.
- Sass: la personalizacion Sass/plana del componente equivalente al CSS mostrado, lista para dummy/demo cuando aplique.

Cuando el CSS o Sass ya se muestra completo en el visualizador, no es obligatorio forzar la descarga para entender el componente; la descarga queda como conveniencia para desarrollo y QA. Los tokens pueden seguir documentados en su seccion propia, pero no reemplazan el CSS/Sass dentro del visualizador.

## Regla de clases de texto

En nuevas paginas, componentes documentales y HTML descargables se deben usar las clases productivas de texto ya configuradas en `core/base/_typography.scss`: `.mp-display-*`, `.mp-h1` a `.mp-h6`, `.mp-parrafo-*`, `.mp-body-*`, `.mp-label`, `.mp-hint`, `.mp-placeholder` y `.mp-btn` segun corresponda. Esto asegura que Light, Dark y High Contrast resuelvan tipografia y color desde el core y no desde estilos aislados del portal.

## Reglas para QA

Cada componente debe incluir checklist especifico para validar:

- estados
- accesibilidad
- responsive
- comportamiento
- tokens
- contenido
- interaccion por teclado

Para Boton, QA debe validar especialmente: focus visible, activacion con Enter y Space, contraste AA, area tactil minima, loading sin doble clic si aplica, `aria-label` en solo icono, alineacion de iconos y paddings por anatomia.

## Reglas para futuros componentes

La pagina del Boton es la referencia base. Todo nuevo componente debe reutilizar la misma arquitectura documental y tecnica: una columna principal de lectura, secciones escaneables, anatomia interactiva cuando aplique, playground funcional, tokens reales, codigo copiable, criterios de accesibilidad y checklist QA.

## Regla de layout para documentacion

Las pantallas y secciones de documentacion deben estructurarse con el grid de Bootstrap siempre que aplique: `.container`, `.container-fluid`, `.row`, `.col-*`, `.g-*`, `.gy-*`, `.gx-*`, `align-items-*` y `justify-content-*`. Esto facilita ajustar columnas, responsividad y espaciados sin reescribir CSS propio.

Evitar crear grids custom para columnas principales si Bootstrap puede resolver la estructura. Los estilos propios del portal deben enfocarse en apariencia, estados visuales, callouts, demos y detalles especificos de documentacion.

El header superior del sistema lo entrega el shell del portal (`drupal.html` o `design-system.html`). Las paginas internas de componentes no deben duplicar un header/topbar propio; deben iniciar con breadcrumb, hero y contenido documental.
