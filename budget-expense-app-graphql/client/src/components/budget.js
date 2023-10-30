    import React from 'react'
    import { useContext} from 'react';
    import { AppContext } from '../context/AppContext';
    
    const Budget= ()=> {
        const { budget } = useContext(AppContext);
         
  
        return (
          <div>
            <div class="alert alert-secondary p-4">
              <span>Budget: £{budget}</span>
            </div>
          </div>
        );
    }
   export default Budget