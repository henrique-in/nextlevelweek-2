import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/44737473?s=460&u=f023a7e4b1183a222baeca52267e7ffd727ebd84&v=4" alt="Image profile" />
        <div>
          <strong>Henrique</strong>
          <span>Lorem Ipson</span>
        </div>
      </header>
          <p>
             Neque porro quisquam
           <br /> <br />
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </p>

            <footer>
            <p>
              Preço/hora
              <strong>R$ 70,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
                          Entrar em contato
                      </button>
            </footer>
    </article>
  );
}

export default TeacherItem;