# Cómo actualizar la web desde Cursor (sin ir a Vercel)

## Flujo automático: GitHub → Vercel

Cuando subes cambios a GitHub, **Vercel despliega automáticamente**. No necesitas entrar a vercel.com.

---

## Pasos para actualizar la web

1. **Edita el código** en Cursor (como siempre).

2. **Guarda los archivos** (Ctrl+S).

3. **Sube los cambios a GitHub** desde la terminal:

   ```powershell
   git add .
   git status
   git commit -m "Descripción de los cambios"
   git push
   ```

4. **Listo.** Vercel detecta el push, hace un nuevo build y actualiza la web en 1–2 minutos.

---

## Resumen

| Acción              | Dónde      |
|---------------------|------------|
| Editar código       | Cursor     |
| Subir cambios       | Terminal → `git push` |
| Despliegue          | Automático en Vercel |

No hace falta entrar a Vercel para publicar cambios.
