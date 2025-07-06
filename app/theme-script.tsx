export function ThemeScript() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html{line-height:1.5;-webkit-text-size-adjust:100%;background:#fff;color:#000}
            html.dark{background:#000;color:#fff}
            html.light{background:#fff;color:#000}
            body{margin:0;font-family:system-ui,-apple-system,sans-serif}
            *,::before,::after{box-sizing:border-box}
          `.replace(/\s+/g, ' ').trim(),
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(){try{var e=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(e);document.documentElement.style.colorScheme=e}catch(e){document.documentElement.classList.add("light")}}();`,
        }}
      />
    </>
  )
}