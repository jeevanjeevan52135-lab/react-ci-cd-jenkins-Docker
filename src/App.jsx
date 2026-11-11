import "./index.css";

const pipeline = [
  { name: "GitHub", detail: "Source Code", status: "Completed" },
  { name: "Jenkins", detail: "Build & Test", status: "Completed" },
  { name: "Trivy", detail: "Security Scan", status: "Pending" },
  { name: "Docker", detail: "Image Build", status: "Completed" },
  { name: "AWS EC2", detail: "Deployment", status: "Running" },
  { name: "Kubernetes", detail: "Container Orchestration", status: "Pending" }
];

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>DevOps<span>Hub</span></h2>
        <p className="menu-title">MAIN MENU</p>
        <a className="active">▦ Dashboard</a>
        <a>◈ CI/CD Pipeline</a>
        <a>▣ Docker</a>
        <a>♧ Kubernetes</a>
        <a>☁ AWS Cloud</a>
        <a>⬡ Security Scan</a>
        <div className="sidebar-bottom">DevOps Dashboard v1.0</div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h1>DevOps Dashboard</h1>
            <p>Monitor your application and deployment pipeline</p>
          </div>
          <div className="profile">RJ <span>Project Admin</span></div>
        </header>

        <section className="welcome">
          <div>
            <h2>Welcome to DevOpsHub 👋</h2>
            <p>Your application deployment overview</p>
          </div>
          <span className="demo-label">DEMO DASHBOARD</span>
        </section>

        <section className="stats">
          <div className="stat-card">
            <p>Total Pipelines</p>
            <h2>06</h2>
            <span>Configured stages</span>
          </div>
          <div className="stat-card">
            <p>Docker Images</p>
            <h2>01</h2>
            <span>React application</span>
          </div>
          <div className="stat-card">
            <p>Deployment</p>
            <h2 className="green">Active</h2>
            <span>AWS EC2 environment</span>
          </div>
          <div className="stat-card">
            <p>Security Scan</p>
            <h2 className="orange">Pending</h2>
            <span>Trivy integration</span>
          </div>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>CI/CD Pipeline</h2>
              <p>Application delivery workflow</p>
            </div>
            <span className="demo-label">Sample status</span>
          </div>

          <div className="pipeline">
            {pipeline.map((item, index) => (
              <div className="pipeline-item" key={item.name}>
                <div className="pipeline-number">{index + 1}</div>
                <div className="pipeline-info">
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                  <span className={`status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <h2>Application Details</h2>
            <p className="detail-row">Application <strong>React.js</strong></p>
            <p className="detail-row">Container <strong>react-app</strong></p>
            <p className="detail-row">Docker Port <strong>3000</strong></p>
            <p className="detail-row">Environment <strong>AWS EC2</strong></p>
          </div>
          <div className="panel">
            <h2>Technology Stack</h2>
            <div className="tech-list">
              <span>React.js</span>
              <span>GitHub</span>
              <span>Jenkins</span>
              <span>Docker</span>
              <span>Trivy</span>
              <span>AWS</span>
              <span>Kubernetes</span>
            </div>
          </div>
        </section>

        <footer>DevOpsHub © 2026 | Built with React.js</footer>
      </main>
    </div>
  );
}

export default App;
