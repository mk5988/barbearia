 document.getElementById("agendar.html").addEventListener("submit", function(event) {
               event.preventDefault(); 

               const nome = document.getElementById("nome").value.trim();
               const telefone = document.getElementById("telefone").value.trim();
               const data = document.getElementById("data").value;
               const hora = document.getElementById("hora").value;
               const servico = document.querySelector('input[name="servico"]:checked');

               const telefoneRegex = /^\d{11}$/;

  

               if (nome === "") {
                  alert("Por favor, preencha o nome.");
                  return;
               }

               if (!telefoneRegex.test(telefone)) {
                  alert("Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX.");
                  return;
               }

                if (data === "") {
                  alert("Por favor, selecione uma data.");
                  return;
               }

                if (hora === "") {
                  alert("Por favor, selecione um horário.");
                  return;
               }

                if (!servico) {
                  alert("Por favor, selecione um serviço.");
                  return;
               }

                  alert("Formulário enviado com sucesso!");
                });
        





