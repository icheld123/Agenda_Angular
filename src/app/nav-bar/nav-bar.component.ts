import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  logo = 'https://noticias.unad.edu.co/templates/unadgeneral/images/logoUNAD.png';
  eventos = [
    {nombre: 'Académicos',
    url:'https://www.youtube.com/watch?v=nnEOS5kupuc'},
    {nombre: 'Investigación',
    url:'https://www.youtube.com/watch?v=zVO5xTAbxm8'},
    {nombre: 'Biblioteca',
    url:'https://www.youtube.com/watch?v=NL-tvd8jeBc'},
    {nombre: 'Radio UNAD Virtual',
    url:'https://www.youtube.com/watch?v=aOnKCcjP8Qs'},
    {nombre: 'TV UNAD Virtual',
    url:'https://www.youtube.com/watch?v=4Sc81yxo600'}
  ];
  vermas = [
    {nombre: 'Historias de Líderes Unadistas',
    url:'https://camilariveraflye.wixsite.com/egresadosunad'},
    {nombre: 'Portafolio de Servicios y Beneficios',
    url:'https://view.genial.ly/5f24ad16dfd2410db873d5f6/presentation-mes-agosto'},
    {nombre: 'Grabaciones: Conferencias de Empleabilidad',
    url:'https://andressanchezkensh.wixsite.com/my-site'},
    {nombre: 'Boletín Bibliográfico Vol. 11',
    url:'https://sandrapatriciacarr.wixsite.com/my-site-1'}
  ];
}
