
gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(".foto2", {
    x:500,
    opacity:0,

  },
    {
    x:0,
    duration: 2,
    opacity:1,
    scrollTrigger: {
      trigger: ".container2",
      start: "top center",
      end: "bottom center",
      toggleActions: "restart reverse restart reverse"
    }
    });

    gsap.fromTo(".testo2", {
      x:-500,
      opacity:0,
  
    },
      {
      x:0,
      duration: 2,
      opacity:1,
      scrollTrigger: {
        trigger: ".container2",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart reverse restart reverse"
      }
      });


      gsap.fromTo(".foto3", {
        x:500,
        opacity:0,
    
      },
        {
        x:0,
        duration: 2,
        opacity:1,
        scrollTrigger: {
          trigger: ".container3",
          start: "top center",
          end: "bottom center",
          toggleActions: "restart reverse restart reverse"
        }
        });
    
        gsap.fromTo(".testo3", {
          x:-500,
          opacity:0,
      
        },
          {
          x:0,
          duration: 2,
          opacity:1,
          scrollTrigger: {
            trigger: ".container3",
            start: "top center",
            end: "bottom center",
            toggleActions: "restart reverse restart reverse"
          }
          });

          gsap.fromTo(".foto4", {
            x:500,
            opacity:0,
        
          },
            {
            x:0,
            duration: 2,
            opacity:1,
            scrollTrigger: {
              trigger: ".container4",
              start: "top center",
              end: "bottom center",
              toggleActions: "restart reverse restart reverse"
            }
            });
        
            gsap.fromTo(".testo4", {
              x:-500,
              opacity:0,
          
            },
              {
              x:0,
              duration: 2,
              opacity:1,
              scrollTrigger: {
                trigger: ".container4",
                start: "top center",
                end: "bottom center",
                toggleActions: "restart reverse restart reverse"
              }
              });
 

