type titleProp = {
   title:string,
   index:number
}

const ChildTitleComponent = (props: titleProp) => {
   const {title, index } = props;

   return (
       <div style={{color:'red'}}>
          <span>{title}</span>
          <span>{index}</span>
       </div>
   )
}

export default ChildTitleComponent;

