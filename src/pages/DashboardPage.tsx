import { useNavigate, Link } from 'react-router-dom'

import { donwloadIcon } from '../assets'
import './DashboardPage.css'

export const DashboardPage = () => {
  const navigate = useNavigate()

  return (
    <div className="dashboard__container">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/recibos">
            Freelance App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/recibos">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => navigate('/login')}>
              Salir
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-5">
        <h2>Mis recibos</h2>
        <button type="button" className="btn btn-success">
          Agregar
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button type="button" className="btn btn-outline-primary">
                  <img
                    src={donwloadIcon}
                    alt="donwload icon"
                    width="22"
                    height="22"
                  />
                </button>
              </td>
            </tr>
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
