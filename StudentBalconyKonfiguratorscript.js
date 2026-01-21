document.addEventListener('DOMContentLoaded', function() {
            // Elemente selektieren
            const sizeOptions = document.querySelectorAll('.size-option');
            const productPreview = document.getElementById('productPreview');
            const selectedSizeText = document.getElementById('selectedSizeText');
            const confirmBtn = document.getElementById('confirmBtn');
            const resetBtn = document.getElementById('resetBtn');
            
            let selectedSize = null;
            
            // Größenauswahl Event-Handler
            sizeOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Vorherige Auswahl entfernen
                    sizeOptions.forEach(opt => opt.classList.remove('selected'));
                    
                    // Aktuelle Auswahl markieren
                    this.classList.add('selected');
                    
                    // Daten aktualisieren
                    selectedSize = this.dataset.size;
                    const imgSrc = this.dataset.img;
                    
                    // Vorschau aktualisieren
                    productPreview.src = imgSrc;
                    selectedSizeText.textContent = `Ausgewählt: ${selectedSize.replace('x', ' cm × ')} cm`;
                    
                    // Button aktivieren
                    confirmBtn.disabled = false;
                });
            });
            
            // Zurücksetzen-Button
            resetBtn.addEventListener('click', function() {
                sizeOptions.forEach(opt => opt.classList.remove('selected'));
                productPreview.src = 'placeholder.jpg';
                selectedSizeText.textContent = 'Bitte wählen Sie eine Größe aus';
                confirmBtn.disabled = true;
                selectedSize = null;
            });
            
            // Bestätigungs-Button (Sendet Daten an Backend)
            confirmBtn.addEventListener('click', function() {
                if (!selectedSize) return;
                
                // Hier kommt die Logik zum Senden der Daten
                sendConfiguration(selectedSize);
            });
            
            // Mock-Funktion für Backend-Kommunikation
            function sendConfiguration(size) {
                // Hier würdest du einen Fetch-Request an dein Python-Backend senden
                console.log('Konfiguration gesendet:', size);
                
                // Beispiel-Fetch (aktiviere für echten Einsatz)
                /*
                fetch('/send-configuration', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        size: size,
                        product: 'window_seat'
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if(data.success) {
                        alert('Konfiguration erfolgreich gesendet!');
                    }
                });
                */
                
                alert(`Danke für deine Bestellung (${size.replace('x', 'x')} cm). Du erhälst in Kürze eine Bestellbestätigung per e-Mail.`);
            }
        });
