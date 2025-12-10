  document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hier würde normalerweise der Formularversand an den Server erfolgen
            // Für dieses Beispiel zeigen wir nur eine Bestätigung
            
            // Formulardaten sammeln
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // In der Praxis: fetch('/kontakt', { method: 'POST', body: JSON.stringify(formData) })
            console.log('Formular gesendet:', formData);
            
            // Erfolgsmeldung anzeigen
            alert(`Vielen Dank, ${formData.name}! Deine Nachricht wurde erfolgreich übermittelt.`);
            
            // Formular zurücksetzen
            this.reset();
        });
 
 
  document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hier würde normalerweise der Formularversand an den Server erfolgen
            // Für dieses Beispiel zeigen wir nur eine Bestätigung
            
            // Formulardaten sammeln
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // In der Praxis: fetch('/kontakt', { method: 'POST', body: JSON.stringify(formData) })
            console.log('Formular gesendet:', formData);
            
            // Erfolgsmeldung anzeigen
            alert(`Vielen Dank, ${formData.name}! Deine Nachricht wurde erfolgreich übermittelt.`);
            
            // Formular zurücksetzen
            this.reset();
        });