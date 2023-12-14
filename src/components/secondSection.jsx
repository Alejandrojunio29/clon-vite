import CardMenu from "./cardMenu"

export default function SecondSection (){
    return(
        <main className="card-list">
          <CardMenu emoji="💡" title="Instant Server Start" content="On demand file serving over native ESM, no bundling required"/>  
          <CardMenu emoji="☀️" title="Lighting Fast HMR" content="Hot Module Replacement (HMR) that stays fast regardless of app size"/>  
          <CardMenu emoji="🛠️" title="Rich Features" content="Out-of-the-box support for Typescript, JSX, CSS and more"/>  
          <CardMenu emoji="📦" title="Optimized Build" content="Pre-configured Rollup build with multi-page and library mode support"/>  
          <CardMenu emoji="🔩" title="Universal Plugins" content="Rollup-superset plugin interface shared between dev and build"/>  
          <CardMenu emoji="🔑" title="Fully Typed APIs" content="Flexible programmatic APIs with full TypeScript typing"/>  
           
        </main>
      
    )
}