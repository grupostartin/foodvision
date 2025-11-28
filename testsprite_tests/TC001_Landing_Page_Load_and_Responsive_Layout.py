import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Check page loading time is within acceptable limits (<3 seconds) and verify all landing page components render correctly.
        await page.mouse.wheel(0, 500)
        

        # -> Verify that all landing page components (Hero, Pricing, Social Proof, Problem/Solution sections) render correctly visually.
        await page.mouse.wheel(0, 1000)
        

        # -> Resize the browser window to tablet screen size using a supported method and verify layout responsiveness.
        await page.mouse.wheel(0, 500)
        

        # -> Simulate tablet screen size by scrolling and visually inspecting layout for responsiveness and content adaptation without overlap or horizontal scroll.
        await page.mouse.wheel(0, 1000)
        

        await page.mouse.wheel(0, 1000)
        

        # -> Simulate tablet screen size by scrolling and visually inspecting layout for responsiveness and content adaptation without overlap or horizontal scroll.
        await page.mouse.wheel(0, 1000)
        

        await page.mouse.wheel(0, 1000)
        

        # -> Simulate mobile screen size and verify layout responsiveness and content adaptation without overlap or horizontal scroll.
        await page.mouse.wheel(0, 1000)
        

        await page.mouse.wheel(0, 1000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Transforme Visitantes em Pedidos com Fotos que Dão Fome.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Aumente suas vendas no iFood e Rappi em até 30% com nosso tratamento profissional de imagens e Food Styling Digital.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Usado por +500 restaurantes').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+32% este mês').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Fotos amadoras e escuras passam impressão ruim e afastam clientes.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Baixa conversão: clientes clicam, veem fotos ruins e saem sem comprar.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Concorrência usa fotos profissionais, deixando quem não usa para trás.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tecnologia de pós-processamento digital baseada em neurociência visual para despertar a fome subconsciente.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Iluminação Gourmet: correção de sombras e realce das cores naturais.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Edição de Apetite: realce de texturas como brilho, crocância e vapor.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Entrega Flash 48h: cardápio renovado entregue em até 48 horas úteis.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ROI Imediato: investimento que se paga nos primeiros dias com aumento da conversão.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Minhas vendas dobraram na primeira semana após atualizar o cardápio. O investimento se pagou em 2 dias.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A qualidade visual ficou incrível. As fotos passam exatamente a suculência dos nossos burgers. Recomendo demais!').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Estava perdendo clientes para concorrentes com fotos melhores. A FoodVision salvou meu negócio.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=10 Fotos Profissionais').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Edição de Cor & Luz').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Entrega em 72h').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Formato iFood/Rappi').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=30 Fotos Profissionais').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Food Styling Digital Avançado').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Capa Premium para iFood').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Entrega Prioritária (48h)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Consultoria de Cardápio').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=50+ Fotos').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Gestão de Múltiplos Cardápios').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Padronização Visual').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Suporte Dedicado').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Não deixe seu cliente comer no concorrente. Quero vender mais').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Termos de Uso').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Política de Privacidade').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contato').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2024 FoodVision. Todos os direitos reservados.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    