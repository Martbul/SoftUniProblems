class JobOffers{
    constructor(employer,position){
        this.employer = employer
        this.position = position
        this.jobCandidates = []
    }

    jobApplication(candidates){
         let allNames = []
        candidates.forEach(candidate=> {
            let name = candidate.split('-')[0]
            
            let education = candidate.split('-')[1]
            let exp = Number(candidate.split('-')[2])
            let curName = this.jobCandidates.find(p => p.name === name)
            if(curName == undefined){
                 allNames.push(name)
            }
           
            if(curName !== undefined){
                if(exp > curName.exp){
                    curName.exp = exp
                }
                
        }else{
            this.jobCandidates.push({name, education,exp})
           
        }
        })
        return `You successfully added candidates: ${allNames.join(', ')}.`
      

        
    }

    jobOffer(chosenPerson){
        let name = chosenPerson.split('-')[0]
        let minEXP = Number(chosenPerson.split('-')[1])

        let currPerson = this.jobCandidates.find(p => p.name === name)

        if(currPerson === undefined){
            throw new Error(`${name} is not in the candidates list!`)
        }

        if(minEXP > currPerson.exp){
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minEXP} years.`)
        }else{
            currPerson.exp = 'hired'
            return `Welcome aboard, our newest employee is ${name}.`
        }
    }

    salaryBonus(name){
        let currPerson = this.jobCandidates.find(p => p.name === name)

        if(currPerson === undefined){
            throw new Error(`${name} is not in the candidates list!`)
        }

        if(currPerson.education === 'Bachelor'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        }

        if(currPerson.education === 'Master'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        }

        if(currPerson.education !== 'Master' && currPerson.education !== 'Bachelor' ){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }

    }


    candidatesDatabase(){
        if(this.jobCandidates.length === 0){
            throw new Error("Candidate Database is empty!")
        }else{
            let l1Arr = []
          this.jobCandidates.forEach(candidate =>{
            l1Arr.push(`${candidate.name}-${candidate.exp}`)
          })
          let arr = l1Arr.sort()
          arr.unshift("Candidates list:")
           return arr.join('\n')
        }
    }
} 


let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-55"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));

 console.log(Jobs.candidatesDatabase());
