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

## Regla de descargas por componente

Cada pagina de componente debe incluir una descarga clara para desarrollo y QA cuando el componente tenga estilos productivos en `core`. La descarga debe ofrecer, como minimo:

- CSS plano.
- Sass plano.
- JSON de tokens, clases, anatomias y modos.

Los archivos descargables deben estar unidos a la definicion del `core`, usar tokens reales de Figma y mantener la nomenclatura oficial `.mp-*`. Deben estar organizados por modo cuando aplique: Light, Dark y High Contrast.

La descarga debe ser facil de leer para dummy/demo: sin mixins, sin abstracciones complejas y sin clases inventadas fuera de la API oficial. Si algun valor no existe en Figma o core, debe quedar marcado como pendiente por validar antes de publicarlo como token oficial.

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
