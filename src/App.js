import anugrah from './anugrah.jpg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [ubahFoto, setUbahFoto] = useState(false);

  const tombolUbahFoto = () => {
    setUbahFoto(!ubahFoto);
  }
  const profileImageClass = `profile-image ${ubahFoto ? 'fotoLingkaran' : ''}`;
  return React.createElement('div', { className: 'App' },
    React.createElement('header', { className: 'profile' },

      React.createElement('div', { className: profileImageClass },
        React.createElement('img', { src: anugrah, className: 'profile-photo', alt: 'Profil' })
      ),
      React.createElement('div', { className: 'profile-detail' },
        React.createElement('div', { className: 'nama' },
          React.createElement('h3', null, 'Anugrah Mariani Pirade')
        ),
        React.createElement('div', { className: 'detail' },
          React.createElement('div', { className: 'item' },
            React.createElement('span', { className: 'detail-label' }, 'Hobi :'),
            React.createElement('span', { className: 'detail-value' }, 'Tidur')
          ),
          React.createElement('div', { className: 'item' },
            React.createElement('span', { className: 'detail-label' }, 'Jalur Sukses :'),
            React.createElement('span', { className: 'detail-value' }, 'Corporate Enterpreneurship')
          ),
          React.createElement('div', { className: 'item' },
            React.createElement('span', { className: 'detail-label' }, 'Jurusan :'),
            React.createElement('span', { className: 'detail-value' }, 'Informatika')
          ),
        )
      )
    ),
    React.createElement('div', { className: 'dibawah'},
      React.createElement('h4', null, 'Perempuan'),
      React.createElement('h4', null, 'Mahasiswa')
    ),
    React.createElement('div', { className: 'pengalaman' },
      React.createElement('h2', null, 'ORGANISASI'),
      React.createElement('div', { className: 'list-pengalaman' },
        React.createElement('div', { className: 'column' },
        ),
        React.createElement('div', { className: 'column' },
          React.createElement('div', { className: 'Informatika Student Union' },
            React.createElement('P', null, 'Informatika Student Union'),
          ),
          React.createElement('br'),
          React.createElement('div', { className: 'nplc' },
            React.createElement('P', null, 'NPLC 2023'),
          
          )
        )
      )
    )
  );
}
export default App;