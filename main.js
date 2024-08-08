// Set up for DOM content loaded event
addEventListener('DOMContentLoaded', () => {
    // Declare const variables from ID card and icon element
    const idCard = document.querySelector('.id-card');
    const editIcon = document.querySelector('.edit-icon');
    const saveIcon = document.querySelector('.save-icon');

    function toggleEditMode() {
        // Check if ID card has edit-mode class, hide save icon and display edit icon
        // If not, then hide edit icon and display save icon
        if (idCard.classList.contains('edit-mode')) {
            idCard.classList.remove('edit-mode'); // remove ID card from edit mode
            saveIcon.style.display = 'none'; // remove save icon
            editIcon.style.display = 'block'; // display edit icon
        }
        else {
            idCard.classList.add('edit-mode'); // put ID card is in edit mode
            editIcon.style.display = 'none'; // remove edit icon
            saveIcon.style.display = 'block'; // display save icon
        }
    }

    // Call toggleEditMode function when icons are clicked
    editIcon.addEventListener('click', toggleEditMode);
    saveIcon.addEventListener('click', toggleEditMode);
});