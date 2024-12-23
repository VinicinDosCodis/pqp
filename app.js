const API_URL = 'http://localhost:3000/departamentos';

// Página 1: Listar Departamentos
async function fetchDepartments() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    data.forEach(department => {
      tableBody.innerHTML += `
        <tr>
          <td>${department.Numero}</td>
          <td>${department.Nome}</td>
          <td>${department.GerenteId || 'N/A'}</td>
          <td>
            <button onclick="deleteDepartment(${department.Numero})">Excluir</button>
          </td>
        </tr>
      `;
    });
  } catch (error) {
    console.error('Erro ao buscar departamentos:', error);
  }
}

// Página 2: Criar Departamento
document.getElementById('department-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const manager = document.getElementById('manager').value;

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Nome: name, GerenteId: manager || null })
    });

    alert('Departamento criado com sucesso!');
    window.location.href = 'index.html';
  } catch (error) {
    console.error('Erro ao criar departamento:', error);
  }
});

// Função de Excluir Departamento
async function deleteDepartment(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    alert('Departamento excluído com sucesso!');
    fetchDepartments();
  } catch (error) {
    console.error('Erro ao excluir departamento:', error);
  }
}

// Inicializar a página 1
if (document.getElementById('table-body')) {
  fetchDepartments();
}
