

// from here: https://ischools.org/members/directory/
// cleaned using Excel
const iSchoolNames = [
    'Drexel University: College Computing & Informatics',
    'University of Pittsburgh: School of Computing and Information',
    'Syracuse University: School of Information Studies',
    'University of Michigan: School of Information',
    'University of Washington: The Information School',
    'Florida State University: College of Communication and Information',
    'University of Illinois at Urbana-Champaign: School of Information Sciences',
    'Indiana University: School of Informatics, Computing, and Engineering',
    'University of North Carolina at Chapel Hill: School of Information and Library Science',
    'University of Texas: School of Information',
    'University of California, Berkeley: School of Information',
    'University of California, Irvine: Donald Bren School of Information and Computer Sciences',
    'University of California, Los Angeles: Graduate School of Education and Information Studies',
    'Georgia Tech: College of Computing',
    'University of Maryland: College of Information Studies',
    'The Pennsylvania State University: College of Information Sciences and Technology',
    'Rutgers, The State University of New Jersey: School of Communication and Information',
    'Carnegie Mellon University, Heinz College: School of Information Systems and Management School of Public Policy and Management',
    'Humboldt-Universität zu Berlin: Berlin School of Library and Information Science',
    'Wuhan University: School of Information Management',
    'University of Maryland, Baltimore County: Department of Information Systems',
    'University of North Texas: College of Information',
    'The University of Sheffield: Information School',
    'University of British Columbia: The School of Library, Archival & Information Studies',
    'University of Kentucky: College of Communications and Information',
    'University of Wisconsin-Milwaukee: School of Information Studies',
    'University of Missouri: School of Information Science and Learning Technologies',
    'The University of Tennessee: School of Information Sciences',
    'University of Arizona: School of Information',
    'Cornell University: Faculty of Computing and Information Science',
    'Kent State University: School of Information',
    'Renmin University of China: School of Information Resource Management',
    'Peking University: Department of Information Management',
    'San Jose State University: School of Information',
    'Central China Normal University: School of Information Management',
    'Monash University: Faculty of Information Technology'
];

class iSchool {
    constructor(s) {
        let parts = s.split(":");
        this.univ = parts[0].trim();
        this.school = parts[1].trim();
        this.ranking = -1;
        this.key = s;
    }
}

export function getISchools() {
    let iSchools = [];
    for (s of iSchoolNames) {
        iSchools.push(new iSchool(s));
    }    
    return iSchools;
}