function lang_change(lang) {
    switch (lang) {
        case 'en': english() 
            break;
        case 'de': german() 
            break;
        case 'es': spanish() 
            break;
        case 'pg': portuguese() 
            break;
        case 'fr': french() 
            break;
    
        default: english()
            break;
    }
}

function checkNoteInputTitlePlaceholder(noteTitle) {
    if(!noteInputPlaceholderActive) return renderInaktivePlaceholder(noteTitle);
    renderAktivePlaceholder(noteTitle);
}

function renderInaktivePlaceholder(noteTitle) {
    switch (CURRENT_LANG) {
        case 'en': noteTitle.setAttribute('placeholder', 'Take a note...'); 
            break;
        case 'de': noteTitle.setAttribute('placeholder', 'Schreibe eine Notiz...'); 
            break;
        case 'es': noteTitle.setAttribute('placeholder', 'Escribe...'); 
            break;
        case 'pg': noteTitle.setAttribute('placeholder', 'Escrever...'); 
            break;
        case 'fr': noteTitle.setAttribute('placeholder', 'Écrire...'); 
            break;
    
        default: noteTitle.setAttribute('placeholder', 'Take a note...');
            break;
    }   
}

function renderAktivePlaceholder(noteTitle) {
    switch (CURRENT_LANG) {
        case 'en': noteTitle.setAttribute('placeholder', 'Title'); 
            break;
        case 'de': noteTitle.setAttribute('placeholder', 'Titel'); 
            break;
        case 'es': noteTitle.setAttribute('placeholder', 'Título'); 
            break;
        case 'pg': noteTitle.setAttribute('placeholder', 'Título'); 
            break;
        case 'fr': noteTitle.setAttribute('placeholder', 'Titre'); 
            break;
    
        default: noteTitle.setAttribute('placeholder', 'Title');
            break;
    }   
}


// ENGLISH

function english() {
    CURRENT_LANG = 'en';
    storeCurrentLang();

    $('head > title').textContent = 'Notes';
    $('#lang-notes-heading').innerText = 'Notes';
    $('#lang-notes').innerText = 'Notes';
    $('#lang-archive').innerText = 'Archive';
    $('#lang-bin').innerText = 'Bin';
    $('#lang-info').innerText = 'Info';
    $('#search').placeholder = 'Search';
    $('#note-input-close-btn').innerText = 'Close';
    $('#lang-empty-archive').innerText = 'Your archived notes appear here';
    $('#lang-empty-bin').innerText = 'No notes in Recycle Bin';
    $('#lang-information-text').innerText = 'Here you can find the links to all icons used on this page';
    $('#lang-settings-heading').innerText = 'Settings';
    $('#lang-language-heading').innerText = 'Language';
    $('#lang-delete-after-days').innerText = 'Notes in the Recycle Bin are deleted after 7 days';
    $('#empty-bin-btn').innerText = 'Empty bin';
    if($('#lang-open-note-edited')) $('#lang-open-note-edited').innerText = 'Edited';
    $('#note-title-input').placeholder = 'Take a note...';
    $('#note-content-input').placeholder = 'Take a note...';
    $('#lang-privacy-policy').innerText = 'Privacy policy';
    $('#lang-legal-notice').innerText = 'Legal notice';
}



// GERMAN

function german() {
    CURRENT_LANG = 'de';
    storeCurrentLang();

    $('head > title').textContent = 'Notizen';
    $('#lang-notes-heading').innerText = 'Notizen';
    $('#lang-notes').innerText = 'Notizen';
    $('#lang-archive').innerText = 'Archiv';
    $('#lang-bin').innerText = 'Papierkorb';
    $('#lang-info').innerText = 'Infomation';
    $('#search').placeholder = 'Suchen';
    $('#note-input-close-btn').innerText = 'Schließen';
    $('#lang-empty-archive').innerText = 'Ihre archivierten Notizen werden hier angezeigt';
    $('#lang-empty-bin').innerText = 'Keine Notizen im Papierkorb';
    $('#lang-information-text').innerText = 'Hier finden Sie die Links zu allen auf dieser Seite verwendeten Icons';
    $('#lang-settings-heading').innerText = 'Einstellungen';
    $('#lang-language-heading').innerText = 'Sprache';
    $('#lang-delete-after-days').innerText = 'Notizen im Papierkorb werden nach 7 Tagen gelöscht';
    $('#empty-bin-btn').innerText = 'Papierkorb leeren';
    if($('#lang-open-note-edited')) $('#lang-open-note-edited').innerText = 'Bearbeitet';
    $('#note-title-input').placeholder = 'Schreibe eine Notiz...';
    $('#note-content-input').placeholder = 'Schreibe eine Notiz...';
    $('#lang-privacy-policy').innerText = 'Datenschutz';
    $('#lang-legal-notice').innerText = 'Impresssum';
}



// SPANISCH

function spanish() {
    CURRENT_LANG = 'es';
    storeCurrentLang();

    $('head > title').textContent = 'Notas';
    $('#lang-notes-heading').innerText = 'Notas';
    $('#lang-notes').innerText = 'Notas';
    $('#lang-archive').innerText = 'Archivo';
    $('#lang-bin').innerText = 'Papelera';
    $('#lang-info').innerText = 'Información';
    $('#search').placeholder = 'Buscar';
    $('#note-input-close-btn').innerText = 'Cerrar';
    $('#lang-empty-archive').innerText = 'Tus notas archivadas aparecen aquí';
    $('#lang-empty-bin').innerText = 'No hay notas en la Papelera de reciclaje';
    $('#lang-information-text').innerText = 'Aquí puede encontrar los enlaces a todos los iconos utilizados en esta página';
    $('#lang-settings-heading').innerText = 'Ajustes';
    $('#lang-language-heading').innerText = 'Idioma';
    $('#lang-delete-after-days').innerText = 'Las notas de la Papelera de reciclaje se eliminan después de 7 días';
    $('#empty-bin-btn').innerText = 'Vaciar la papelera';
    if($('#lang-open-note-edited')) $('#lang-open-note-edited').innerText = 'Editado';
    $('#note-title-input').placeholder = 'Escribe...';
    $('#note-content-input').placeholder = 'Escribe...';
    $('#lang-privacy-policy').innerText = 'Política de privacidad';
    $('#lang-legal-notice').innerText = 'Aviso legal';
}



// PORTUGUESE

function portuguese() {
    CURRENT_LANG = 'pg';
    storeCurrentLang();

    $('head > title').textContent = 'Notas';
    $('#lang-notes-heading').innerText = 'Notas';
    $('#lang-notes').innerText = 'Notas';
    $('#lang-archive').innerText = 'Arquivo';
    $('#lang-bin').innerText = 'Caixa';
    $('#lang-info').innerText = 'Informações';
    $('#search').placeholder = 'Procurar';
    $('#note-input-close-btn').innerText = 'Fechar';
    $('#lang-empty-archive').innerText = 'Suas notas arquivadas aparecem aqui';
    $('#lang-empty-bin').innerText = 'Nenhuma nota na Lixeira';
    $('#lang-information-text').innerText = 'Aqui você pode encontrar os links para todos os ícones usados ​​nesta página';
    $('#lang-settings-heading').innerText = 'Configurações';
    $('#lang-language-heading').innerText = 'Linguagem'; 
    $('#lang-delete-after-days').innerText = 'As notas na Lixeira são excluídas após 7 dias'; 
    $('#empty-bin-btn').innerText = 'Esvazie a lixeira'; 
    if($('#lang-open-note-edited')) $('#lang-open-note-edited').innerText = 'Editado'; 
    $('#note-title-input').placeholder = 'Escrever...';
    $('#note-content-input').placeholder = 'Escrever...';
    $('#lang-privacy-policy').innerText = 'Política de privacidade';
    $('#lang-legal-notice').innerText = 'Aviso legal';
}



// FRENCH

function french() {
    CURRENT_LANG = 'fr';
    storeCurrentLang();

    $('head > title').textContent = 'Remarques';
    $('#lang-notes-heading').innerText = 'Remarques';
    $('#lang-notes').innerText = 'Remarques';
    $('#lang-archive').innerText = 'Archive';
    $('#lang-bin').innerText = 'Poubelle';
    $('#lang-info').innerText = 'Information';
    $('#search').placeholder = 'Recherche';
    $('#note-input-close-btn').innerText = 'Fermer';
    $('#lang-empty-archive').innerText = 'Vos notes archivées apparaissent ici';
    $('#lang-empty-bin').innerText = 'Aucune note dans la corbeille';
    $('#lang-information-text').innerText = 'Ici vous pouvez trouver les liens vers toutes les icônes utilisées sur cette page';
    $('#lang-settings-heading').innerText = 'Paramètres';
    $('#lang-language-heading').innerText = 'Langue';
    $('#lang-delete-after-days').innerText = 'Les notes dans la corbeille sont supprimées après 7 jours';
    $('#empty-bin-btn').innerText = 'Vider la poubelle';
    if($('#lang-open-note-edited')) $('#lang-open-note-edited').innerText = 'Édité';
    $('#note-title-input').placeholder = 'Écrire...';
    $('#note-content-input').placeholder = 'Écrire...';
    $('#lang-privacy-policy').innerText = 'Politique de confidentialité';
    $('#lang-legal-notice').innerText = 'Avis juridique';
}