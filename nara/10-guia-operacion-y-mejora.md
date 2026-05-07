# Guía de operación y mejora de Nara

## Objetivo operativo

Nara debe ayudar a QA a revisar diseño de forma rápida, clara y accionable. No debe reemplazar validación técnica en Figma, CSS, DOM o repositorio.

## Cómo probar Nara

Usar tres tipos de prueba:

1. Captura de pantalla completa.
2. Recorte de un componente puntual, por ejemplo botón o card.
3. Pantalla con errores conocidos para verificar si Nara marca “No cumple”.

## Señales de que Nara está funcionando bien

- Responde en tabla.
- Es concisa.
- No inventa medidas exactas.
- Dice “No cumple” cuando visualmente es evidente.
- Usa “Validación manual” cuando no puede confirmar token, HEX, px/rem, CSS o DOM.
- Pide recorte cuando la imagen no permite evaluar el componente.
- Convierte hallazgos en acciones claras.

## Señales de ajuste necesario

- Responde demasiado largo.
- Suaviza hallazgos evidentes.
- Dice que todo requiere validación técnica y no toma postura visual.
- Inventa tokens o medidas.
- No pregunta cuando el objetivo es ambiguo.
- No usa la documentación cargada.

## Ciclo de mejora recomendado

Cada semana o cada 15 días:

1. Revisar 3 a 5 respuestas de Nara.
2. Identificar respuestas útiles y respuestas incorrectas.
3. Convertir decisiones validadas en reglas.
4. Actualizar `07-aprendizajes-qa-template.md`.
5. Volver a probar con las mismas capturas.

## Cómo hacer que Nara aprenda

Nara no aprende automáticamente. El equipo debe actualizar el documento de aprendizajes. Ese archivo debe vivir en SharePoint o en la fuente de conocimiento conectada a Copilot.

Cuando el equipo diga “esto sí cumple”, “esto no cumple”, “este criterio está mal” o “así debe evaluarse”, la decisión debe registrarse en `Nara - Aprendizajes QA`.

## Configuración recomendada en Copilot

- Search all websites: OFF
- Only use specified sources: ON
- Reference org chart and profile info: OFF
- Create images: OFF
- Create documents, charts, and code: ON

## Starters recomendados

| Title | Message |
|---|---|
| Revisión rápida | Revisa esta pantalla en modo rápido frente al sistema de diseño. |
| Revisión completa | Genera un reporte QA completo de esta pantalla. |
| Revisar componente | Revisa este componente y dime si cumple visualmente. |
| Accesibilidad | Evalúa esta pantalla en modo accesibilidad. |
| Crear tickets | Convierte los hallazgos en tareas para desarrollo. |
