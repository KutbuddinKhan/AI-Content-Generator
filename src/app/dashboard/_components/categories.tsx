import React from 'react'
import CategoryItems from './category-item';


export interface CategoryProps {
    name: string;
    value: string;
}

const Categories = ({ items }: { items: CategoryProps[] }) => {
    return (
        <div className='flex gap-2 flex-wrap'>
            {items.map((category) => (
                <div key={category.value}>
                    <CategoryItems 
                        key={category.name} 
                        name={category.name} 
                        value={category.value} 
                    />
                    </div>
            ))}
        </div>
    )
}

export default Categories
