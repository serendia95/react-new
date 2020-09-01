import React, { Component } from 'react';
import tableau from 'tableau-api';
 
class Dashboard extends Component {
    render () {
        return (
            <div className='tableau-container'>
                <div className='tableau-title text-center' id="dashboardx">
                    <h3>Dashboard</h3>
                </div>
                <div className='tableau-items text-center' style={{marginTop:"40px", marginBottom:"40px"}}>
                    <iframe src="https://public.tableau.com/views/DashboardKelautandanPerikananNasional/DashboardOverview2?:language=en&:display_count=y&:origin=viz_share_link&:showVizHome=no&:embed=true" width="100%" height="820px">
                    </iframe>
                </div>
                <div className="col text-center about-dashboard">
                    <p>
                        Sebagaimana yang dapat ditunjukan pada dashboard diatas, bahwa laut Indonesia telah banyak berkontribusi dalam menghasilkan berbagai spesies laut, yang dimana tersebar diseluruh wilayah kelautan Indonesia.
                    </p>
                    <br></br>
                    <p>
                        Berikut dibawah ini merupakan dashboard yang menunjukan teknologi yaitu Kapal yang digunakan oleh para Nelayan diseluruh wilayah kelautan Indonesia.
                    </p>
                </div>
                <div className='tableau-items text-center' style={{marginTop:"40px"}}>
                    <iframe src="https://public.tableau.com/views/Dashboard_Overview/NelayanvsTeknologi?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link&:showVizHome=no&:embed=true" width="100%" height="820px">
                    </iframe>
                </div>
            </div>
        )
    }
}
  
export default Dashboard;