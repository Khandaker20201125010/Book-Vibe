import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import UseChartBooks from '../UseCharBooks/UseChartBooks';
import { getFromLocalStorage } from '../ultils/localStorage';

const Readpages = () => {
    const bookCharting = getFromLocalStorage();
    
    const colors = ['#0088FE', '#00C49F', '#FFBB28','red','violate','#FF00FF','#7FFFD4','#008000','#FEF250'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
      <div>
          <div className='hidden lg:block'>
             <BarChart
            width={1500}
            height={600}
            data={bookCharting} 
            margin={{
                top: 100,
                // right: 30,
                // left: 50,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {bookCharting.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Bar>
        </BarChart>
        
        </div>  
        <div className='lg:hidden  max-sm:flex max-sm:flex-col '>
             <BarChart
            width={500}
            height={1000}
            data={bookCharting} 
            margin={{
                top: 100,
                // right: 30,
                // left: 50,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {bookCharting.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Bar>
        </BarChart>
        
        </div>
      </div>
       
    );
};

export default Readpages;
