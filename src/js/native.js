(()=>{
    const d=document
        , ww=window.innerWidth
    ;
    function s(e){
        const r=d.querySelector(e);
        if(!r){
            return d.createElement('div')
        }
        return r
    };
    function a(e){
        const r=d.querySelectorAll(e);
        if(!r.length){
            return [d.createElement('div')];
        }
        return r
    };

    if(ww>1280){// 1920
        const t=setTimeout(()=>{
            Promise.all([
                import(
                  /* webpackChunkName: "1920" */
                  `../anim/gsap1920`
                )
              ]).then(function (modules) {
                  if(modules[0])modules[0]?.default(d,s,a)
              });
            clearTimeout(t)
        },201)
    }

})()