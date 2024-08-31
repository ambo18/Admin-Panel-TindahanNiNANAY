import React, { useEffect, useState } from 'react';
import { firestore } from '../firebaseConfig';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // Example query to get sales data
      const snapshot = await firestore.collection('sales').get();
      const salesData = snapshot.docs.map(doc => doc.data());
      
      // Process data for chart
      const chartData = {
        labels: salesData.map(sale => sale.date),
        datasets: [
          {
            label: 'Sales',
            data: salesData.map(sale => sale.amount),
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)'
          }
        ]
      };
      setData(chartData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;
