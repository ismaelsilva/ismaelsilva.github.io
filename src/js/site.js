$(function() {
  const object = {
    "id": 01,
    "name":"Ismael Ferreira da Silva",
    "city": "Manaus",
    "state": "Amazonas",
    "country": "Brasil",
    "phone": "+5592981718710",
    "url_photo":"https://media-exp1.licdn.com/dms/image/C4D03AQHbf-HboP6BZQ/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=30ZIe-NXZmS-2Bnj51sU7tvMV0dnontsPqH0mFk2mvQ",
    "summary": "I started my career in 2011 as a systems trainee, and currently I’m developing web applications using .Net Framework, C#, Node.js, PHP, Javascript, HTML 5, CSS and others. I have worked in different types of projects such as Systems for Education, Industry, Sales, Personnel Administration. I have experience with other technologies and also a good team spirit.",
    "education": [
      {
        "id":2,
        "university":"Faculdade Metropolitana de Manaus - FAMETRO",
        "title":"Desenvolvimento de Sistemas para Ambiente Web",
        "type":"Pós-graduação, Especialidade",
        "date_end":"2015-07-30"
      },
      {
        "id":1,
        "university":"Faculdade Metropolitana de Manaus - FAMETRO",
        "title":"Sistemas de Informação",
        "type":"Graduação",
        "date_end":"2013-07-30"
      }
    ],
    "work_experiences": [
      { 
        "id": 7, 
        "role": "Senior Developer",
        "company" : "ELSYS",
        "date_start": "2020-01-13",
        "date_end": null,
        "present":true
      },
      { 
        "id": 6, 
        "role": "Senior Developer",
        "company" : "CITS - Centro Internacional de Tecnologia de Software do Amazonas",
        "date_start": "2018-12-01",
        "date_end": "2020-01-07",
        "present":false,
        "other_roles":[
          {
            "role":"Pleno Developer",
            "date_start": "2017-07-24",
            "date_end": "2018-11-30",
          }
        ]
      },
      { 
        "id": 5, 
        "role": "Web Developer",
        "company" : "Startup eMercado Ofertas",
        "date_start": "2016-06-30",
        "date_end": "2017-12-01",
        "present":false
      },
      { 
        "id": 4, 
        "role": "Web Developer",
        "company" : "SEAD - Secretaria de Estado de Administração e Gestão do Amazonas",
        "date_start": "2016-04-24",
        "date_end": "2017-07-24",
        "present":false
      },
      { 
        "id": 3, 
        "role": "Web Developer",
        "company" : "FUCAPI - Fundação Centro de Análise, Pesquisa e Inovação Tecnológica",
        "date_start": "2014-09-08",
        "date_end": "2016-01-16",
        "present":false
      },
      { 
        "id": 2, 
        "role": "Junior Developer",
        "company" : "FPF Tech - Fundação Desembargador Paulo Feitoza",
        "date_start": "2012-09-08",
        "date_end": "2014-09-07",
        "present":false
      },
      { 
        "id": 1, 
        "role": "Junior Developer",
        "company" : "Instituto de Tecnologia José Rocha Sergio Cardoso – Grupo CCE",
        "date_start": "2011-04-01",
        "date_end": "2012-07-30",
        "present":false
      }
    ],
    "skills": [
      "C#",
      "PHP",
      "Java",
      "Node.js",
      "Javascript",
      "HTML",
      "CSS",
      "Android"
    ],
    "frameworks":[
      "React Native",
      "React JS",
      "Angular 2+",
      "jQuery",
      ".Net Framework",
      "ASP.NET MVC",
      "Laravel 5+",
      "Entity Framework Code First"
    ],
    "databases":[
      "SQLServer",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "MariaDB"
    ],
    "languages": [
      "Portuguese",
      "English"
    ],
    "social_networks":{
        "github":"https://github.com/ismaelsilva",
        "linkedin":"https://www.linkedin.com/in/ismael-ferreira/",
        "instagram":"https://www.instagram.com/ismaelferreira/"
    }
  }

  function renderJson() {
    var options = {
      collapsed: $('#collapsed').is(':checked'),
      rootCollapsable: $('#root-collapsable').is(':checked'),
      withQuotes: $('#with-quotes').is(':checked'),
      withLinks: $('#with-links').is(':checked')
    };

    $('#json-renderer').jsonViewer(object, options);
  }

  $('p.options input[type=checkbox]').click(renderJson);

  renderJson();
});