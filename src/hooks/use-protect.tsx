// useEffect(() => {
  //   // Função para desabilitar o menu de contexto (botão direito do mouse)
  //   const disableContextMenu = (e: MouseEvent) => {
  //     e.preventDefault();
  //     alert("Conteúdo protegido.");
  //   };

  //   // Função para desabilitar atalhos de teclado específicos
  //   const disableDevToolsShortcuts = (e: KeyboardEvent) => {
  //     if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || (e.ctrlKey && e.key === 'U') || e.key === 'F12') {
  //       e.preventDefault();
  //       alert("Conteúdo protegido.");
  //     }
  //   };

  //   document.addEventListener('contextmenu', disableContextMenu);
  //   window.addEventListener('keydown', disableDevToolsShortcuts);

  //   // Limpeza dos event listeners ao desmontar o componente
  //   return () => {
  //     document.removeEventListener('contextmenu', disableContextMenu);
  //     window.removeEventListener('keydown', disableDevToolsShortcuts);
  //   };
  // }, []);