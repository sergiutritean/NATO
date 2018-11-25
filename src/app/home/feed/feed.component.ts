import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '../../../../node_modules/@angular/fire/firestore';
import { EventModel } from '../../../assets/event.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  //events = new Observable<any[]>();

  @ViewChild('inputText') searchText;

  text = {
    'mnap': [
      {
        'closing_date': '07-12-2018',
        'extra': {
          'description': 'Unitatea Militară 01835 Bucureşti din Ministerul Apărării Naţionale organizează concurs de ocupare a postului vacant de execuţie de inginer specialist gradul IA/studii superioare din cadrul Biroului carburanţi-lubrifianţi.'
        },
        'link': 'http://posturi.gov.ro/post/inginer-specialist-ia-s-unitatea-militara-01835-bucuresti/',
        'location': 'Angajator: Unitatea Militară 01835, Bucureşti',
        'src': 'mnap',
        'title': 'Inginer specialist IA S'
      },
      {
        'closing_date': '07-12-2018',
        'extra': {
          'description': 'Unitatea Militară 02150 București, din Ministerul Apărării Naționale organizează concurs pentru ocuparea pe perioadă nedeterminată a funcțiilor contractuale de execuție vacante, astfel:'
        },
        'link': 'http://posturi.gov.ro/post/functii-contractuale-3-posturi-unitatea-militara-02150-bucuresti/',
        'location': 'Angajator: Unitatea Militară 02150 București',
        'src': 'mnap',
        'title': 'Funcții contractuale (3 posturi)'
      },
      {
        'closing_date': '07-12-2018',
        'extra': {
          'description': 'U.M. 02068, Constanţa, din Ministerul Apărării Naţionale organizează concurs de recrutare pentru ocuparea pe perioadă nedeterminată a funcțiilor contractuale de execuție, vacante, de muncitor calificat IV (bucătar).'
        },
        'link': 'http://posturi.gov.ro/post/muncitor-calificat-iv-bucatar-u-m-02068-constanta/',
        'location': 'Angajator: U.M. 02068, Constanţa',
        'src': 'mnap',
        'title': 'Muncitor calificat IV (bucătar)'
      },
      {
        'closing_date': '10-12-2018',
        'extra': {
          'description': 'Direcţia Generală Management Resurse Umane din Ministerul Apărării Naţionale organizează concurs de recrutare pentru ocuparea pe perioadă nedeterminată a funcției publice de execuție, vacante, de consilier, clasa I, grad profesional principal – Biroul Marketing Promovare Profesie Militară.'
        },
        'link': 'http://posturi.gov.ro/post/consilier-principal-directia-generala-management-resurse-umane-din-ministerul-apararii-nationale-2/',
        'location': 'Angajator: Direcţia Generală Management Resurse Umane din Ministerul Apărării Naţionale',
        'src': 'mnap',
        'title': 'Consilier principal'
      },
      {
        'closing_date': '06-12-2018',
        'extra': {
          'description': 'Unitatea Militară nr. 02003 din Constanţa din Ministerul Apărării Naţionale organizează concurs pentru ocuparea pe perioadă nedeterminată a funcției contractuale de personal civil, de execuţie, vacante, de analist (programator) ajutor debutant.'
        },
        'link': 'http://posturi.gov.ro/post/analist-programator-ajutor-debutant-unitatea-militara-nr-02003-din-constanta/',
        'location': 'Angajator: Unitatea Militară nr. 02003 din Constanţa',
        'src': 'mnap',
        'title': 'Analist (programator) ajutor debutant'
      },
      {
        'closing_date': '05-12-2018',
        'extra': {
          'description': 'Unitatea Militară 02296 – Ministerul Apărării Naţionale, din Bucureşti organizează concurs de recrutare pentru ocuparea pe perioadă nedeterminată a funcției contractuale de execuție, vacante de referent de specialitate gradul II.'
        },
        'link': 'http://posturi.gov.ro/post/referent-de-specialitate-ii-unitatea-militara-02296-din-bucuresti/',
        'location': 'Angajator: Unitatea Militară 02296 din Bucureşti',
        'src': 'mnap',
        'title': 'Referent de specialitate II'
      },
      {
        'closing_date': '06-12-2018',
        'extra': {
          'description': 'Unitatea Militară 02049 Constanţa, din Ministerul Apărării Naţionale organizează concurs de recrutare pentru ocuparea pe perioadă nedeterminată a funcției contractuale, vacante, după cum urmează:'
        },
        'link': 'http://posturi.gov.ro/post/ingineri-si-subinginer-3-posturi-unitatea-militara-02049-constanta/',
        'location': 'Angajator: Unitatea Militară 02049 Constanţa',
        'src': 'mnap',
        'title': 'Ingineri și subinginer (3 posturi)'
      },
      {
        'closing_date': '06-12-2018',
        'extra': {
          'description': 'U.M. 02493 Piteşti, din Ministerul Apărării Naţionale, organizează concurs de ocupare pe perioadă nedeterminată a posturilor vacante de personal civil contractual, astfel:'
        },
        'link': 'http://posturi.gov.ro/post/economist-ii-contabil-ii-4-posturi/',
        'location': 'Angajator: U.M. 02493 Piteşti',
        'src': 'mnap',
        'title': 'Economist II, contabil II (4 posturi)'
      },
      {
        'closing_date': '05-12-2018',
        'extra': {
          'description': 'Unitatea Militară 01784 Râmnicu Vâlcea din Ministerul Apărării Naţionale organizează concurs pentru ocuparea pe perioadă nedeterminată a unui post vacant de execuţie, de personal civil contractual, astfel:'
        },
        'link': 'http://posturi.gov.ro/post/economist-gradul-ii-unitatea-militara-01784-ramnicu-valcea/',
        'location': 'Angajator: Unitatea Militară 01784 Râmnicu Vâlcea ',
        'src': 'mnap',
        'title': 'Economist gradul II'
      },
      {
        'closing_date': '04-12-2018',
        'extra': {
          'description': 'Unitatea Militară 02192 Constanţa (Academia Navală „Mircea cel Bătrân”) din Ministerul Apărării Naţionale organizează concurs în vederea încadrării funcției contractuale, cu contract de muncă pe perioadă nedeterminată, de muncitor calificat II (bucătar) la popota studenţi militari.'
        },
        'link': 'http://posturi.gov.ro/post/muncitor-calificat-ii-bucatar-unitatea-militara-02192-constanta-academia-navala-mircea-cel-batran/',
        'location': 'Angajator: Unitatea Militară 02192 Constanţa (Academia Navală „Mircea cel Bătrân”)',
        'src': 'mnap',
        'title': 'Muncitor calificat II (bucătar)'
      }
    ],
    'nato_recruit': [
      {
        'closing_date': 'Nov 27, 2018',
        'extra': {
          'grade': 'B3',
          'job_category': 'Information Systems and Technology',
          'nato_body': 'NAEW&C Force GK',
          'vacancy_n': '180722'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Technician%20(Service%20Desk%20-Systems%20Inst).pdf',
        'location': 'Geilenkirchen, Germany',
        'src': 'nato_recruit',
        'title': 'Technician (Service Desk/System Installation)'
      },
      {
        'closing_date': 'Nov 27, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Logistics',
          'nato_body': 'NSPA',
          'vacancy_n': '201/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20Technical%20Officer%20(NSIP%20Projects),%20S141-A3.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Senior Technical Officer (NSIP Projects), S141-A3'
      },
      {
        'closing_date': 'Nov 25, 2018',
        'extra': {
          'grade': 'B3',
          'job_category': 'Administration',
          'nato_body': 'SACT',
          'vacancy_n': '180825'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Staff%20Assistant_(Admin).pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Staff Assistant (Admin)'
      },
      {
        'closing_date': 'Nov 29, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Logistics',
          'nato_body': 'NSPA',
          'vacancy_n': '208/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Life%20Cycle%20Management%20Officer%20(Armored%20Vehicles),%20LM237-A2.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Life Cycle Management Officer (Armored Vehicles), LM237-A2'
      },
      {
        'closing_date': 'Dec 04, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Logistics',
          'nato_body': 'NSPA',
          'vacancy_n': '206/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Logistics%20Officer%20(SAP%20Training),%20L23-A2.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Logistics Officer (SAP Training), L23-A2'
      },
      {
        'closing_date': 'Dec 04, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Logistics',
          'nato_body': 'NSPA',
          'vacancy_n': '205/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20Logistics%20Officer%20(Business%20Processes%20and%20Training),%20L22-A3.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Senior Logistics Officer (Business Processes and Training), L22-A3'
      },
      {
        'closing_date': 'Dec 05, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Logistics',
          'nato_body': 'NSPA',
          'vacancy_n': '213/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Chief%20of%20Section%20(PATRIOT%20System%20Support),%20LD-226.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Chief of Section (PATRIOT System Support), LD-226'
      },
      {
        'closing_date': 'Nov 23, 2018',
        'extra': {
          'grade': 'B3',
          'job_category': 'Human Resources',
          'nato_body': 'HQ JFC Brunssum',
          'vacancy_n': '180851'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Assistant%20Civilian%20Personnel%20Administration%20-%20LCM.pdf',
        'location': 'Brunssum, The Netherlands',
        'src': 'nato_recruit',
        'title': 'Assistant Civilian Personnel Administration (LCM) - Part-time  '
      },
      {
        'closing_date': 'Nov 30, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Finance',
          'nato_body': 'SHAPE',
          'vacancy_n': '180839'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/ACCOUNTANT%20(ACO%20CORPORATE%20ACCOUNTING%20MANAGEMENT).pdf',
        'location': 'Shape, Mons, Belgium',
        'src': 'nato_recruit',
        'title': 'ACCOUNTANT (ACO CORPORATE ACCOUNTING MANAGEMENT)'
      },
      {
        'closing_date': 'Dec 06, 2018',
        'extra': {
          'grade': 'B3',
          'job_category': 'Finance',
          'nato_body': 'NSPA',
          'vacancy_n': '210/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Business%20Travel%20Agent%20(FF-156).pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Business Travel Agent (FF-156)'
      },
      {
        'closing_date': 'Nov 30, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Finance',
          'nato_body': 'SHAPE',
          'vacancy_n': '180837'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20Accountant%20(ACO%20Accounting%20Management).pdf',
        'location': 'Shape, Mons, Belgium',
        'src': 'nato_recruit',
        'title': 'Senior Accountant (ACO Accounting Management)'
      },
      {
        'closing_date': 'Dec 10, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Engineering',
          'nato_body': 'NSPA',
          'vacancy_n': '216/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Technical%20Officer%20(Quality%20Assurance),%20AQ-2.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Technical Officer (Quality Assurance), AQ-2'
      },
      {
        'closing_date': 'Nov 29, 2018',
        'extra': {
          'grade': 'B3',
          'job_category': 'Administrative Support',
          'nato_body': 'NDC',
          'vacancy_n': '180808'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Staff%20Assistant%20(Admin).pdf',
        'location': 'Rome, Italy',
        'src': 'nato_recruit',
        'title': 'Staff Assistant (Admin)'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Security Policy',
          'nato_body': 'NSPA',
          'vacancy_n': '217/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20Officer%20(Digital%20Forensic%20and%20Security%20Awareness),%20AS-37.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Senior Officer (Digital Forensic and Security Awareness), AS-37'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180842'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Enterprise%20Policy%20SME%20A-2.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Enterprise Policy SME A-2'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180843'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Operational%20C2%20Capabilities%20Architect.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Operational C2 Capabilities Architect'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Information Systems and Technology',
          'nato_body': 'SACT',
          'vacancy_n': '180844'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Cyberspace%20Federation%20and%20Partnership%20SME.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Cyberspace Federation & Partnership SME'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180872'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20Integrator_Architect%20Joint%20Effects%20Caps.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Senior Integrator/Architect Joint Effects Caps'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180874'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20Integrator_Architect%20Space%20Capabilities.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Senior Integrator/Architect Space Capabilities'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180876'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Project%20Coord%20(BMD%20Capability)_Sr%20BMD%20Sys%20Eng.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Project Coord (BMD Capability)_Sr BMD Sys Eng'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180878'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Sect%20Hd%20(Risk%20Analysis)_Senior%20Ops%20Research.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Sect Hd (Risk Analysis)_Senior Ops Research'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180881'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Requirements%20Quality%20Assurance%20Analyst.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Requirements Quality Assurance Analyst'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180883'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Requirements%20Manager%20(Cybersoace_IA_Crypto%20SME).pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Requirements Manager (Cybersoace_IA_Crypto SME)'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180892'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Staff%20Officer%20(Joint%20Doctrine%20Campaign%20Plan%20Mgr).pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Staff Officer (Joint Doctrine Campaign Plan Mgr) '
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Information Systems and Technology',
          'nato_body': 'SACT',
          'vacancy_n': '180893'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Staff%20Officer%20(M%20and%20S%20Technical%20SME_Advisor).pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Staff Officer (M and S Technical SME_Advisor)'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180894'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20Strategic%20Analyst%20(Concept%20Development).pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Senior Strategic Analyst (Concept Development)'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180853'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20AirC2_IAMD%20Cap%20Engineer.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Senior AirC2_IAMD Cap Engineer'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180854'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/AirC2_IAMD%20Capability%20Architect.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'AirC2_IAMD Capability Architect'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180855'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Project%20Coord%20(AirC2%20Capability)_Sr%20AirC2%20Sys%20Eng.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Project Coord (AirC2 Capability)_Sr AirC2 Sys Eng'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Operations',
          'nato_body': 'SACT',
          'vacancy_n': '180857'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Project%20Coord%20(ACCS%20Capability)_Sr%20ACCS%20Sys%20Eng.pdf',
        'location': 'Norfolk, VA, United States',
        'src': 'nato_recruit',
        'title': 'Project Coord (ACCS Capability)_Sr ACCS Sys Eng'
      },
      {
        'closing_date': 'Dec 19, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Information Systems and Technology',
          'nato_body': 'JFTC',
          'vacancy_n': '180898'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/System%20Engineer%20(CAX%20Planner).pdf',
        'location': 'Bydgoszcz, Poland',
        'src': 'nato_recruit',
        'title': 'System Engineer (CAX Planner)'
      },
      {
        'closing_date': 'Dec 19, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Information Systems and Technology',
          'nato_body': 'JFTC',
          'vacancy_n': '180899'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Engineer%20(CIS)%20-%20Team%202.pdf',
        'location': 'Bydgoszcz, Poland',
        'src': 'nato_recruit',
        'title': 'Engineer (CIS) - Team 2'
      },
      {
        'closing_date': 'Dec 19, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Information Systems and Technology',
          'nato_body': 'JFTC',
          'vacancy_n': '180900'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Engineer%20(Battle%20Lab_Test%20Integration%20ICT).pdf',
        'location': 'Bydgoszcz, Poland',
        'src': 'nato_recruit',
        'title': 'Engineer (Battle Lab_Test Integration ICT)'
      },
      {
        'closing_date': 'Dec 19, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Information Systems and Technology',
          'nato_body': 'JFTC',
          'vacancy_n': '180901'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Engineer%20(Battle%20Lab_Test%20Integration%20M%20and%20S).pdf',
        'location': 'Bydgoszcz, Poland',
        'src': 'nato_recruit',
        'title': 'Engineer (Battle Lab_Test Integration M and S)'
      },
      {
        'closing_date': 'Dec 17, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Logistics',
          'nato_body': 'NSPA',
          'vacancy_n': '223/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Technical%20project%20leader%20(Artillery%20systems%20-%20MLRS),%20LM145-A2.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Technical project leader (Artillery systems - MLRS), LM145-A2'
      },
      {
        'closing_date': 'Dec 10, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Information Systems and Technology',
          'nato_body': 'NSPA',
          'vacancy_n': '221/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20Cybersecurity%20Engineer,%20IT131-A3.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Senior Cybersecurity Engineer, IT131-A3'
      },
      {
        'closing_date': 'Dec 10, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Information Systems and Technology',
          'nato_body': 'NSPA',
          'vacancy_n': '224/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/SAP%20Business%20Intelligence%20(BI)%20Analyst,%20IT130-A2.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'SAP Business Intelligence (BI) Analyst, IT130-A2'
      },
      {
        'closing_date': 'Nov 30, 2018',
        'extra': {
          'grade': 'B3',
          'job_category': 'Logistics',
          'nato_body': 'NCI Agency NL - Brunssum',
          'vacancy_n': '180705'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Logistician%20(Asset%20Management).pdf',
        'location': 'Brunssum, The Netherlands',
        'src': 'nato_recruit',
        'title': 'Logistician (Asset Management)'
      },
      {
        'closing_date': 'Nov 30, 2018',
        'extra': {
          'grade': 'B3',
          'job_category': 'Logistics',
          'nato_body': 'NCI Agency NL - Brunssum',
          'vacancy_n': '180911'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Logistician%20(Inventory).pdf',
        'location': 'Brunssum, The Netherlands',
        'src': 'nato_recruit',
        'title': 'Logistician (Inventory)'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Logistics',
          'nato_body': 'NSPA',
          'vacancy_n': '227/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20Logistics%20Planning%20Officer%20(OLSP),%20OL4_A3.pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Senior Logistics Planning Officer (OLSP), OL4_A3'
      },
      {
        'closing_date': 'Dec 27, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Finance',
          'nato_body': 'NAEW&C Force GK',
          'vacancy_n': '180909'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Note%20-Chief%20Accounting%20Officer.doc',
        'location': 'Geilenkirchen, Germany',
        'src': 'nato_recruit',
        'title': 'Chief Accounting Officer'
      },
      {
        'closing_date': 'Dec 27, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Finance',
          'nato_body': 'NAEW&C Force GK',
          'vacancy_n': '180910'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Note%20-%20Principal%20Budget%20Officer.doc',
        'location': 'Geilenkirchen, Germany',
        'src': 'nato_recruit',
        'title': 'Principal Budget Officer'
      },
      {
        'closing_date': 'Dec 14, 2018',
        'extra': {
          'grade': 'B3',
          'job_category': 'Administration',
          'nato_body': 'NCI Agency BE - Brussels',
          'vacancy_n': '180886'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Assistant%20180886.pdf',
        'location': 'Brussels, Belgium',
        'src': 'nato_recruit',
        'title': 'Assistant 180886'
      },
      {
        'closing_date': 'Dec 14, 2018',
        'extra': {
          'grade': 'A3',
          'job_category': 'Finance',
          'nato_body': 'NCI Agency BE - Brussels',
          'vacancy_n': '180895'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Senior%20Administrator%20(Cost%20Analyst).pdf',
        'location': 'Brussels, Belgium',
        'src': 'nato_recruit',
        'title': 'Senior Administrator (Cost Analyst)'
      },
      {
        'closing_date': 'Dec 13, 2018',
        'extra': {
          'grade': 'B3',
          'job_category': 'Administrative Support',
          'nato_body': 'NSPA',
          'vacancy_n': '231/2018'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Secretary%20(LW-5).pdf',
        'location': 'Capellen, Luxembourg',
        'src': 'nato_recruit',
        'title': 'Secretary (LW-5)'
      },
      {
        'closing_date': 'Dec 31, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Legal Affairs',
          'nato_body': 'HQ LC Izmir',
          'vacancy_n': 'L001'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Legal%20Assistant%20(P%20and%20I).pdf',
        'location': 'Izmir, Turkey',
        'src': 'nato_recruit',
        'title': 'Legal Assistant (P and I)'
      },
      {
        'closing_date': 'Dec 31, 2018',
        'extra': {
          'grade': 'A2',
          'job_category': 'Operations',
          'nato_body': 'HQ LC Izmir',
          'vacancy_n': 'G3001'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Staff%20Officer%20(Project%20Management).pdf',
        'location': 'Izmir, Turkey',
        'src': 'nato_recruit',
        'title': 'Staff Officer (Project Management)'
      },
      {
        'closing_date': 'Jan 04, 2019',
        'extra': {
          'grade': 'B3',
          'job_category': 'Administrative Support',
          'nato_body': 'International Staff, NATO HQ',
          'vacancy_n': '180918'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Building%20Management%20System%20(BMS)%20Operator.pdf',
        'location': 'Brussels, Belgium',
        'src': 'nato_recruit',
        'title': 'Building Management System (BMS) Operator'
      },
      {
        'closing_date': 'Dec 12, 2018',
        'extra': {
          'grade': 'B3',
          'job_category': 'Administration',
          'nato_body': 'International Staff, NATO HQ',
          'vacancy_n': '180919'
        },
        'link': 'https://www.nato.int/structur/recruit/documents/Library%20Assistant,%20NATO%20Multimedia%20Library,%20EM.pdf',
        'location': 'Brussels, Belgium',
        'src': 'nato_recruit',
        'title': 'Library Assistant, NATO Multimedia Library, EM'
      }
    ],
    'natohq_news': [
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      },
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      },
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      },
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      },
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      },
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      },
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      },
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      },
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      },
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      },
      {
        'img': 'https://www.nato.int/nato_static_fl2014/assets/pictures/graphics_banners/20170130_banner-declassified-menu.jpg',
        'link': 'news_160747.htm?selectedLocale=en',
        'src': 'nato_hq',
        'text': 'NATO Secretary General Jens Stoltenberg began a visit to Rome on Thursday (22 November) to participate in this year’s Mediterranean Dialogues Conference, which addresses shared challenges in the region. Speaking on a panel with Italian Defence Minister Elisabetta Trenta and Iraqi Foreign Minister Mohamed Ali Alhakim, the Secretary General outlined NATO’s role in the fight against terrorism and emphasised the importance of training local forces to secure peace.',
        'title': 'Secretary General visits NATO Command in Naples'
      }
    ],
  };

  toShow = {};

  constructor(db: AngularFirestore) { 
    //this.events = db.collection('mnap').valueChanges();
  }

  ngOnInit() {
    this.toShow = this.text;
  }

  onSearch(event) {
    let toSearch = this.searchText.nativeElement.value;
    let toAdd = {};
    for(let key in this.text) {
      if(key === 'mnap') {
        let array = this.text[key];
        array = array.filter( event => {
          return (event.title.search(toSearch)!=-1 || event.extra.description.search(toSearch)!=-1);
        });
        toAdd[key] = array;
      } else {
        let array = this.text[key];
        array = array.filter( event => {
          return (event.title.search(toSearch)!=-1);
        });
        toAdd[key] = array;
      }
    }
    this.toShow = toAdd;
    console.log(this.toShow);
  }

  clear() {
    this.toShow = this.text;
  }
}
