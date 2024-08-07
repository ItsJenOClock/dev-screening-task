// set up for DOM content loaded event
addEventListener('DOMContentLoaded', () => {
    // declare const variables from ID card and icon element
    const idCard = document.querySelector('.id-card');
    const editIcon = document.querySelector('.edit-icon');
    const saveIcon = document.querySelector('.save-icon');

    function toggleEditMode() {
        // check if ID card has edit-mode class, hide save icon and display edit icon.
        // if not,
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

    // call toggleEditMode function when icons are clicked
    editIcon.addEventListener('click', toggleEditMode);
    saveIcon.addEventListener('click', toggleEditMode);
});