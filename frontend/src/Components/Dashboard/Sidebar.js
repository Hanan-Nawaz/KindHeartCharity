import React from 'react';

const Sidebar = () => {
  const isType = localStorage.getItem('type');

  return (
    <nav id="navbarNav" className="collapse d-lg-block sidebar collapse bg-white">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3">
          <a href="/main/dashboard" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init aria-current="true">
            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
          </a>

          {isType == "volunteer"  || isType == "admin" ? 
          <a href="/main/add-beneficary" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
            <i className="fas fa-chart-area fa-fw me-3"></i><span>Add Benificary</span>
          </a> : ''}

          { isType == "admin" ? 
          <a href="/main/all-users" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
            <i className="fas fa-chart-area fa-fw me-3"></i><span>View All Users</span>
          </a> : ''}

          { isType == "volunteer"  || isType == "admin" ? 
          <a href="/main/all-benificaries" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
            <i className="fas fa-chart-area fa-fw me-3"></i><span>View All Benificaries</span>
          </a> : ''}

          <a href="/main/history" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init aria-current="true">
            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>View Your Donations</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
