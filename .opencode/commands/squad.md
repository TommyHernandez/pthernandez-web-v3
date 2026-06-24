---
description: Orquesta el equipo de agentes para una tarea end-to-end.
agent: build
---
Orquesta esta tarea usando el equipo de agentes y entrega un resultado final integrado:

Tarea: $ARGUMENTS

Flujo obligatorio:
1. Usa `planner-architect` para plan.
2. Usa `code-explorer` para mapa de impacto.
3. Usa `feature-implementer` para cambios.
4. Usa `qa-validator` para validacion tecnica.
5. Usa `ux-reviewer` para chequeo UX/UI cuando aplique.

Si es una tarea de Astro, delega implementacion en `astro-specialist`.

Devuelve:
- Cambios realizados.
- Resultado de validaciones.
- Riesgos restantes.
