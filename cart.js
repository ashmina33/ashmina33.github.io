function toggleDetails(unitNumber) {
    document.querySelectorAll('.unit').forEach(unit => {
        unit.classList.remove('expanded');
        unit.querySelector('.details')?.classList.remove('show');
        unit.querySelector('.details')?.setAttribute('style', 'display: none;');
    });
    
    let selectedUnit = document.getElementById('unit' + unitNumber).parentElement;
    selectedUnit.classList.add('expanded');
    let details = selectedUnit.querySelector('.details');
    if (details) {
        details.classList.add('show');
        details.setAttribute('style', 'display: block;');
    }
}

function addToCart() {
    alert("Item added successfully");
}