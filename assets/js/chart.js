document.addEventListener('DOMContentLoaded', () => {
  const webRawValues = [1.5, 0.5, 0.5, 1.5, 2, 2, 0.5, 1.42, 1];
  const otherRawValues = [2.67, 2.5, 2.25, 0.58, 2.67];
  const circleOffset = 0.05; // shorten the bar slightly (≈ 1 month)

  const web = document.getElementById('webSkillsChart').getContext('2d');
  const other = document.getElementById('otherSkillsChart').getContext('2d');

  new Chart(web, {
    type: 'bar',
    data: {
      labels: [
        'PHP','Python','Laravel','Javascript','HTML','CSS','MySQL','SAP','Git'
      ],
      datasets: [
        {
          label: 'Years of Experience',
          data: webRawValues.map(v => Math.max(v - circleOffset, 0)), // shorten each bar slightly
          backgroundColor: '#00b894',
          borderSkipped: false,
          barThickness: 6
        },
        {
          label: 'End Circles',
          data: webRawValues.map((v, i) => ({ x: v, y: i })),
          type: 'scatter',
          pointStyle: 'circle',
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBorderColor: '#00b894',
          pointBackgroundColor: 'transparent', // no fill
          hoverRadius: 6,
          hoverBorderWidth: 3,
          showLine: false
        }
      ]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        title: {
          display: true,
          text: 'Web Development Experience',
          color: '#fff',
          font: { size: 14, weight: 'normal' },
          padding: { top: 10, bottom: 20 }
        },
        legend: { display: false },
        tooltip: {
          filter: item => item.datasetIndex === 0 || item.datasetIndex === 1,
          displayColors: false,
          callbacks: {
            label: web => {
              const total = web.datasetIndex === 0 
                ? webRawValues[web.dataIndex]  // use original values for tooltip
                : web.parsed.x;
              const years = Math.floor(total);
              const months = Math.round((total - years) * 12);

              let label = '';
              if (years > 0) label += `${years} yr${years > 1 ? 's' : ''}`;
              if (months > 0) label += `${label ? ' & ' : ''}${months} mo${months > 1 ? 's' : ''}`;
              if (!label) label = '0 month';

              return label;
            }
          }
        }
      },
      elements: {
        point: {
          borderWidth: 3,
          radius: 6,
          hoverRadius: 6,
          hoverBorderWidth: 3
        }
      },
      scales: {
        x: {
          min: 0,
          max: 3,
          grid: { color: '#555' },
          ticks: { color: '#ccc' },
          title: {
            display: true,
            text: 'Years',
            color: '#ccc'
          }
        },
        y: {
          grid: { display: false },
          ticks: { color: '#ccc' },
          title: {
            display: true,
            text: 'Web Development Tools',
            color: '#ccc'
          }
        }
      }
    }
  });

  new Chart(other, {
    type: 'bar',
    data: {
      labels: [
        'Word Document','Spreadsheet','SAP ERP','GIS','Data Entry'
      ],
      datasets: [
        {
          label: 'Years of Experience',
          data: otherRawValues.map(v => Math.max(v - circleOffset, 0)), // shorten each bar slightly
          backgroundColor: '#00b894',
          borderSkipped: false,
          barThickness: 6
        },
        {
          label: 'End Circles',
          data: otherRawValues.map((v, i) => ({ x: v, y: i })),
          type: 'scatter',
          pointStyle: 'circle',
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBorderColor: '#00b894',
          pointBackgroundColor: 'transparent', // no fill
          hoverRadius: 6,
          hoverBorderWidth: 3,
          showLine: false
        }
      ]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        title: {
          display: true,
          text: 'Other Experience',
          color: '#fff',
          font: { size: 14, weight: 'normal' },
          padding: { top: 10, bottom: 20 }
        },
        legend: { display: false },
        tooltip: {
          filter: item => item.datasetIndex === 0 || item.datasetIndex === 1,
          displayColors: false,
          callbacks: {
            label: web => {
              const total = web.datasetIndex === 0 
                ? otherRawValues[web.dataIndex]  // use original values for tooltip
                : web.parsed.x;
              const years = Math.floor(total);
              const months = Math.round((total - years) * 12);

              let label = '';
              if (years > 0) label += `${years} yr${years > 1 ? 's' : ''}`;
              if (months > 0) label += `${label ? ' & ' : ''}${months} mo${months > 1 ? 's' : ''}`;
              if (!label) label = '0 month';

              return label;
            }
          }
        }
      },
      elements: {
        point: {
          borderWidth: 3,
          radius: 6,
          hoverRadius: 6,
          hoverBorderWidth: 3
        }
      },
      scales: {
        x: {
          min: 0,
          max: 3,
          grid: { color: '#555' },
          ticks: { color: '#ccc' },
          title: {
            display: true,
            text: 'Years',
            color: '#ccc'
          }
        },
        y: {
          grid: { display: false },
          ticks: { color: '#ccc' },
          title: {
            display: true,
            text: 'Technical Tools',
            color: '#ccc'
          }
        }
      }
    }
  });
});
