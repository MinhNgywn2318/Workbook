let contacts = [];

function themDanhBa() {
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();

    if (name === '' || phone === '') {
        alert('Vui lòng nhập đầy đủ thông tin.');
        return;
    }

    let existingContact = contacts.find(contact => contact.phone === phone);
    if (existingContact) {
        alert('Số điện thoại đã tồn tại trong danh bạ.');
        return;
    }

    contacts.push({ name, phone });
    hienThiDanhBa();
    xoaTrungSoDienThoai();
}

function hienThiDanhBa() {
    let danhBaUl = document.getElementById('danhBa');
    danhBaUl.innerHTML = '';


    contacts.sort((a, b) => a.name.localeCompare(b.name));

    contacts.forEach(contact => {
        let li = document.createElement('li');
        li.textContent = `${contact.name} - ${contact.phone}`;
        danhBaUl.appendChild(li);
    });
}

function timKiem() {
    let tuKhoa = document.getElementById('search').value.trim().toLowerCase();


    let ketQuaTimKiem = contacts.filter(contact =>
        contact.name.toLowerCase().includes(tuKhoa) ||
        contact.phone.includes(tuKhoa)
    );

    hienThiDanhBa(ketQuaTimKiem);
}

function xoaTrungSoDienThoai() {
    let uniqueContacts = [];
    let seenPhones = new Set();

    for (let i = contacts.length - 1; i >= 0; i--) {
        let contact = contacts[i];

        if (!seenPhones.has(contact.phone)) {
            uniqueContacts.unshift(contact); 
            seenPhones.add(contact.phone);
        }
    }

    contacts = uniqueContacts;
}