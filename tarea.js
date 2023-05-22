// importa el paEscribir.loguere de lectura y lo
// asigna a la variable Leer
const Leer = require('prompt-sync')()
const Escribir = console

//const Escribir.log = console
// clase: es un contenedor de es(metodos)
class Secuencial{
   celsiusFahrenheit(){
		// declarar e inicializar variables
		let gC,gF 
		gC=0;gF=0
		// leer datos
		gC= Leer("Ingrese grados Celsius: ")
		// proceso
		gF=(gC*1.8)+32
		// salida
		console.log(gC," grados Celsius= ",gF," Fahrenheit")

    }
    // doble triple
  dobleTriple(){
    let numero, numeroDoble,numeroTriple
    numero=0;numeroDoble=0;numeroTriple=0
    numero=Leer("Ingrese Numero a Procesar: ")
    numeroDoble= numero*2
    numeroTriple= numero*3
    Escribir.log("Numero=",numero," Doble=>",numeroDoble," Triple=>",numeroTriple)
  }
    //Suma dos valores y muestra eL resultado
  suma() {
    let num1, num2, resultado;
     resultado = 0;num1 = 0;num2 = 0;
    
    num1 = parseInt(Leer("Ingrese primer valor: "));
    num2 = parseInt(Leer("Ingrese segundo valor: "));
        
    resultado = num1 + num2;
    Escribir.log("El resultado de la suma de ", num1, " y ", num2, " es ", resultado);
  }
  //2
  vid_9_operadores_racionales_ej_2() {
    let resultado;
    let a, b, c;
    
    Escribir.log("Dijite el valor de a: ");
    a = Leer();
    
    Escribir.log("Dijite el valor de b: ");
    b = Leer();
    
    Escribir.log("Dijite el valor de c: ");
    c = Leer();
    
    resultado = a + b >= c;
    
    Escribir.log("El resultado es: " + resultado);
  }
     //3
  vid_14_operadoes_logicos_ej_3() {
    let resultado 
	  let a,b,c 
	  Escribir.log("Dijite el valor de a: ")
    a = parseFloat(Leer());
	  Escribir.log("Dijite el valor de b: ")
	  b =  parseFloat(Leer())
    Escribir.log ("Dijite el valor de c: ")
	  c = parseFloat(Leer())
	  resultado= ((a<b))&&(b<c)
	  Escribir.log ("el resultado es: ", resultado)
  }
  //4
  vid_16_operadores_aritmeticos_ej_4(){ 
	let a,b,c,resultado 
	Escribir.log ("Dijite el valor de A: ")
  a=parseFloat(Leer())
	Escribir.log ("Dijite el valor de B: ")
	b=parseFloat(Leer())
	Escribir.log ("Dijite el valor de C: ")
	c= parseFloat(Leer())
	resultado = (-b + Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a);
	Escribir.log ("el resultado es: ",resultado)
  }
  //5
  vid_17_operanes_ej_5(){
    let a,b
    let resultado
    
    Escribir.log ("Dijite el valor de a: ");
    a = parseFloat(Leer());
    Escribir.log ("Dijite el valor de b: ");
    b = parseFloat(Leer());
    resultado = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b);
    
    Escribir.log ("el resultado es: ",resultado);
   } 
  //6
   vid_18_intercambio_de_valores_ej_6(){
    let a,b,aux 
    Escribir.log ("Dijite el valor de a: ");
    a=parseFloat(Leer()) ;
    Escribir.log ("Dijite el valor de b: ");
    b= parseFloat(Leer());
    
    aux=a;
    a=b;
    b=aux;
    
    Escribir.log ("El nuevo valor de a es: ",a);
    Escribir.log ("El nuevo valor de b es: ",b);
   }
   //7
   vid_19_diagrma_de_flujo_ej_7(){
    let a,b,c,resultado ;
    a = 10;
    b = 20;
  
    Escribir.log ("digite un numero: ");
  c = parseFloat(Leer());
  resultado = (a + b + c) ;
  
  Escribir.log ("El resultado es ",resultado);
    
   }
    //8
    vid_20_diagrma_estructurado_ej_8() {
    let a,b,resultado ;
    a = 10;
    Escribir.log ("Digite un numero: ");
    b = parseFloat(Leer())
    resultado = a+b;
    Escribir.log ("El resultado es: ",resultado);
    }
  //9
  vid_22_ejercicio1_ej_9(){
  let horas,min,seg 
	let hs, ms, total 
	
	Escribir.log ("digite las horas: ")
	horas=parseFloat(Leer())
	Escribir.log( "digite los minutos ")
	min=parseFloat(Leer())
	Escribir.log ("digite los segundos ")
	seg=parseFloat(Leer())
	hs=horas*3600
	ms=min*60
	total=hs+ms+seg
	Escribir.log( "los segundos equivalentes son: ",total)
  }
  //10
  vid_23_ejercicio_2_ej_10(){
	let radio,area,lon 
  
	Escribir.log ("digite el valo del radio: ")
	radio=parseFloat(Leer())
	area = Math.PI * Math.pow(radio, 2);
  lon = 2 * Math.PI * radio;
	
	Escribir.log( "El area de la circunferencia es: ",area)
	Escribir.log( "la longitud es: ",lon)
  }
  //11
  vid_24_ejercicio_3_ej_11(){
	
    let num_hombres, num_mujeres ;
    let total_studens ;
    let porcentajeH , porcentajeM ;
    
    Escribir.log ("Digite cantidad de hombres: ");
    num_hombres = parseFloat(Leer())
    Escribir.log  ("Digite cantidad de mujeres: ");
     num_mujeres = parseFloat(Leer())
    
    total_studens = num_hombres+ num_mujeres;
    porcentajeH = Math.trunc(num_hombres / total_studens * 100);
    porcentajeM = Math.trunc(num_mujeres / total_studens * 100);
    
    Escribir.log ("El porcentaje de hombres es: ",porcentajeH,"%");
    Escribir.log  ("El porcentaje de  mujeres es: ", porcentajeM,"%");
    
   }
    //12
    vid_25_ejercicio_4_ej_12(){
    
    let a,b,c ;
    let time_testa,time_testb,time_testc ;
    let horas, minutos ; 
    let Total_time ;
    
    
    Escribir.log ("Ingrese la cantidad de test A:");
    a =  parseFloat(Leer())
    Escribir.log  ("Ingrese la cantidad de test b:");
     b = parseFloat(Leer())
    Escribir.log ("Infrese la cantidad de test c :");
     c = parseFloat(Leer())
    
    time_testa = a * 5 ;
    time_testb = b * 8;
    time_testc = c * 6;
    
    Total_time = time_testa + time_testb + time_testc;
    horas = Math.trunc(Total_time / 60);
    minutos = Total_time % 60; 
    
    Escribir.log (" Se tardara: ",horas," horas y ",minutos," minutos  ") ;
    }
  //13
  vid_26_ejercicio_5_ej_13(){
		
		let Precio_inicial 
		let Total_del_pago,descuento  
	
		Escribir.log ("Ingrese el precio")
		Precio_inicial=parseFloat(Leer())

		descuento=Precio_inicial * 15 / 100;
		Total_del_pago=Precio_inicial - descuento;
	
		Escribir.log ("El total a pagar aplicando con decuento es :",Total_del_pago)
  }
  //14
  vid_27_ejercicio_6_ej_14(){
	let  c_examen, c_trabajo_f 
	let p1, p2 , p3,  Promedio_p  
	let Promedio_tP,po_ex,po_tbjf
	let Promedio_total 
	
	Escribir.log ("Ingrese Nota del Primer Parcial: ")
	p1=parseFloat(Leer())
	Escribir.log ("Ingrese Nota del Segundo Parcial: ")
	p2=parseFloat(Leer())
	Escribir.log( "Ingrese Nota del Tercer Parcial: ")
	p3=parseFloat(Leer())
	
	Promedio_p =(p1 + p2 + p3) / 3 ;
	
	Promedio_tP = Promedio_p * 0.55;
	
	Escribir.log("Ingrese nota del Examen final: ")
	c_examen=parseFloat(Leer())
	
	po_ex= c_examen * 0.3
	
	Escribir.log ("ingrese nota del trabajo final: ")
	c_trabajo_f=parseFloat(Leer())
	
	po_tbjf=c_trabajo_f * 0.15 
	
	Promedio_total=Promedio_tP + po_ex + po_tbjf
	
	Escribir.log ("El promedio del estudiante es: ", Promedio_total)
  }
  //15
  vid_29_ejercicio_1_ej_15() {
    let num;
  
    Escribir.log("Ingrese un número: ");
    num = parseInt(Leer());
  
    if (num % 2 === 0) {
      Escribir.log("El número ", num, " es par.");
    } else {
      Escribir.log("El número ", num, " es impar.");
    }
  }
  //16
  vid_30_ejercicio_2_ej_16() {
    let n1, n2, n3, pro;
  
    Escribir.log("Digite 3 calificaciones: ");
    n1 = parseFloat(Leer());
    n2 = parseFloat(Leer());
    n3 = parseFloat(Leer());
    
    pro = (n1 + n2 + n3) / 3;
  
    if (pro >= 70) {
      Escribir.log("Felicidades, has aprobado con promedio: ",pro);
    } else {
      Escribir.log("Reprobado, esfuérzate más. Promedio: ",pro);
    }
  }
  //17
   vid_31_ejercicio_3_ej_17() {
    let V_SD, V_CD, T_AP;
  
    Escribir.log("Ingrese el precio inicial: ");
    V_SD = parseFloat(Leer());
  
    V_CD = V_SD * 20 / 100;
    T_AP = V_SD - V_CD;
  
    if (V_SD > 100) {
      Escribir.log("El total a pagar es: " + T_AP);
    } else {
      Escribir.log("El total a pagar es: " + V_SD);
    }
  }
  //18
  vid_32_ejercicio_4_ej_18() {
    let num1, num2, rel;
  
    Escribir.log("Digite el primer número: ");
    num1 = parseFloat(Leer());
    Escribir.log("Digitar el segundo número: ");
    num2 = parseFloat(Leer());
  
    if (num1 === num2) {
      rel = num1 * num2;
    } else {
      if (num1 > num2) {
        rel = num1 - num2;
      } else {
        rel = num1 + num2;
      }
    }
  
    Escribir.log("El resultado es: ", rel);
  }
  //19
  vid_33_ejercicio_5_ej_19() {
  let num1, num2, num3;

  Escribir.log("Digite 3 números: ");
  num1 = parseInt(Leer());
  num2 = parseInt(Leer());
  num3 = parseInt(Leer());

  if (num1 > num2 && num1 > num3) {
    Escribir.log("El mayor es: " + num1);
  } else if (num2 > num1 && num2 > num3) {
    Escribir.log("El mayor es: " + num2);
  } else {
    Escribir.log("El mayor es: " + num3);
  }
}
//20
vid_34_ejercicio_6_ej_20() {
  let Preciok, precioI, KilosM;
  let Descuento, precio_final;

  Escribir.log("Definir precio de kilos: ");
  Preciok = parseFloat(Leer());
  Escribir.log("Introduzca los kilos: ");
  KilosM = parseFloat(Leer());

  precioI = Preciok * KilosM;

  if (KilosM >= 0 && KilosM <= 2) {
    Descuento = 0;
  } else if (KilosM >= 2.01 && KilosM <= 5) {
    Descuento = precioI * 0.1;
  } else if (KilosM >= 5.01 && KilosM <= 10) {
    Descuento = precioI * 0.15;
  } else {
    Descuento = precioI * 0.2;
  }

  precio_final = precioI - Descuento;

  Escribir.log("El valor a pagar es: " + precio_final + " $");
}
//21
vid_35_ejercicio_7_ej_21() {
  let num;

  Escribir.log("Digite un día de la semana (1/7): ");
  num = parseInt(Leer());

  switch (num) {
    case 1:
      Escribir.log("Lunes");
      break;
    case 2:
      Escribir.log("Martes");
      break;
    case 3:
      Escribir.log("Miércoles");
      break;
    case 4:
      Escribir.log("Jueves");
      break;
    case 5:
      Escribir.log("Viernes");
      break;
    case 6:
      Escribir.log("Sábado");
      break;
    case 7:
      Escribir.log("Domingo");
      break;
    default:
      Escribir.log("Error, no existe día para ese número");
  }
}
vid_36_ejercicio_8_ej_22() {
  let dec;

  Escribir.log("Digite una década: ");
  dec = parseInt(Leer());

  switch (dec) {
    case 10:
      Escribir.log("Bodas de Hojalata");
      break;
    case 20:
      Escribir.log("Bodas de Porcelana");
      break;
    case 30:
      Escribir.log("Bodas de Perlas");
      break;
    case 40:
      Escribir.log("Bodas de Rubí");
      break;
    case 50:
      Escribir.log("Bodas de Oro");
      break;
    case 60:
      Escribir.log("Bodas de Diamante");
      break;
    default:
      Escribir.log("La década no existe");
  }
}
//23
vid_37_ejercicio_9_ej_23() {
  let op;

  Escribir.log("MENU");
  Escribir.log("1. Elevar un número a potencia X");
  Escribir.log("2. Sacar la raíz cuadrada de un número");
  Escribir.log("3. Salir");
  Escribir.log("Digite una opción: ");
  op = parseInt(Leer());

  switch (op) {
    case 1:
      let num, pot, resultado;
      Escribir.log("Digite un número: ");
      num = parseFloat(Leer());
      Escribir.log("Digite una potencia: ");
      pot = parseFloat(Leer());
      resultado = Math.pow(num, pot);
      Escribir.log("El resultado es: " + resultado);
      break;
    case 2:
      let num2, resultado2;
      Escribir.log("Digite un número: ");
      num2 = parseFloat(Leer());
      resultado2 = Math.sqrt(num2);
      Escribir.log("El resultado es: " + resultado2);
      break;
    case 3:
      Escribir.log("Usted ha salido del menú, gracias por preferirnos...");
      break;
    default:
      Escribir.log("Se equivocó de menú");
  }
}
//24
vid_40_ejercicio_1_ej_24() {
  let n, suma, i;

  Escribir.log("Digite la cantidad de números a sumarse: ");
  n = Leer();
  suma = 0;

  for (i = 1; i <= n; i++) {
    suma = suma + i;
  }

  Escribir.log("La suma es: " + suma);
}
//25
vid_41_ejercicio_2_ej_25() {
  let sum_par, sum_impar, i;

  sum_par = 0;
  sum_impar = 0;

  for (i = 2; i <= 49; i++) {
    if (i % 2 === 0) {
      sum_par = sum_par + i;
    } else {
      sum_impar = sum_impar + i;
    }
  }

  Escribir.log("La suma de pares es: " + sum_par);
  Escribir.log("La suma de impares es: " + sum_impar);
}
//26
vid_42_ejercicio_3_ej_26() {
  let num_neg, num_po, num_neu, i, num;

  num_neg = 0;
  num_po = 0;
  num_neu = 0;

  for (i = 1; i <= 10; i++) {
    Escribir.log(i + ". Digite un Numero: ");
    num = Leer();

    if (num > 0) {
      num_po = num_po + 1;
    } else {
      if (num === 0) {
        num_neu = num_neu + 1;
      } else {
        num_neg = num_neg + 1;
      }
    }
  }

  Escribir.log("La cantidad de numeros positivos son: " + num_po);
  Escribir.log("La cantidad de numeros neutros son: " + num_neu);
  Escribir.log("La cantidad de numeros negativos son: " + num_neg);
}
//27
vid_43_ejercicio_4_ej_27() {
  let i, suma, ca_ba, cali, ca_pro;
  suma = 0;
  ca_ba = 99999;

  for (i = 1; i <= 10; i++) {
    Escribir.log(i + ". Digite una calificación: ");
    cali = parseFloat(Leer())

    suma = suma + cali;

    if (cali < ca_ba) {
      ca_ba = cali;
    }
  }

  ca_pro = suma / 10;
  Escribir.log("El promedio es: " + ca_pro);
  Escribir.log("Y la calificación más baja es: " + ca_ba);
}
//28
vid_44_ejercicio_5_ej_28() {
  let i, factorial, num;
  
  do {
    Escribir.log("Escriba un numero: ");
    num = Leer();
  } while (num < 0);
  
  i = 1;
  factorial = 1;
  
  while (i <= num) {
    factorial = factorial * i;
    i = i + 1;
  }
  
  Escribir.log("El factorial es: " + factorial);
}
//29
vid_45_ejercicio_6_ej_29() {
  let i, suma;
  let num ;

  i = 1;
  suma = 0;
  Escribir.log("Ingrese la cantidad de elementos: ");
  num = Number(Leer());

  while (i <= num) {
    suma += Math.pow(i, 2);
    i++;
  }

  Escribir.log("La suma de los cuadrados " + num + " es: " + suma);
}
//30
vid_46_ejercicio_7_ej_30() {
  let n_e, i, num2;
  let cont_par, suma_par, suma_impar, cont_impar;
  let pro_impar;

  Escribir.log("Digite la cantidad de elementos a ingresar: ");
  n_e = Number(Leer());

  i = 1;
  suma_par = 0;
  cont_par = 0;
  suma_impar = 0;
  cont_impar = 0;

  while (i <= n_e) {
    Escribir.log(i,". Digite un numero:");
    num2 = Number(Leer());

    if (num2 % 2 === 0) {
      suma_par += num2;
      cont_par++;
    } else {
      suma_impar += num2;
      cont_impar++;
    }

    i++;
  }

  if (cont_par === 0) {
    Escribir.log("No se han ingresado numeros pares.");
  } else {
    Escribir.log("La suma de los numeros pares es: " + suma_par);
    Escribir.log("El conteo de los numeros pares es: " + cont_par);
  }

  if (cont_impar === 0) {
    Escribir.log("No se han ingresado numeros impares.");
  } else {
    pro_impar = suma_impar / cont_impar;
    Escribir.log("El promedio de impares es: " + pro_impar);
  }
}
//31
ejercicio_31() {
  let horas, num_horas, num_personas, tarifa;
  let salario, salario_total;
 
  
  do {
    // Buscamos la solucion de horas
    Escribir.log('Ingrese el numero de horas: ');
    num_horas = parseFloat(Leer());
    
    Escribir.log("Ingrese el costo de horas: ");
    horas = parseFloat(Leer());
  } while (num_horas <= 0);
  
  tarifa = num_horas * horas;
 
  
  Escribir.log("El salario total es: " + tarifa);
}
}
// se instancia(declara) un objeto(variable) de LA clase
const secuen1 = new Secuencial()
//secuen1.celsiusFahrenheit()
//secuen1.dobleTriple()
//secuen1.suma()
//vid_9_operadores_racionales_ej_2()
//secuen1.vid_14_operadoes_logicos_ej_3()
//secuen1.vid_16_operadores_aritmeticos_ej_4()
//secuen1.vid_17_operanes_ej_5()
//secuen1.vid_18_intercambio_de_valores_ej_6()
//secuen1.vid_19_diagrma_de_flujo_ej_7()
//secuen1.vid_20_diagrma_estructurado_ej_8()
//secuen1.vid_22_ejercicio1_ej_9()
//secuen1.vid_23_ejercicio_2_ej_10()
//secuen1.vid_24_ejercicio_3_ej_11()
//secuen1.vid_25_ejercicio_4_ej_12()
//secuen1.vid_26_ejercicio_5_ej_13()
//secuen1.vid_27_ejercicio_6_ej_14()
//secuen1.vid_29_ejercicio_1_ej_15()
//secuen1.vid_30_ejercicio_2_ej_16()
//secuen1.vid_31_ejercicio_3_ej_17()
//secuen1.vid_32_ejercicio_4_ej_18()
//secuen1.vid_33_ejercicio_5_ej_19()
//secuen1.vid_34_ejercicio_6_ej_20()
//secuen1.vid_35_ejercicio_7_ej_21()
//secuen1.vid_36_ejercicio_8_ej_22()
//secuen1.vid_37_ejercicio_9_ej_23()
//secuen1.vid_40_ejercicio_1_ej_24()
//secuen1.vid_41_ejercicio_2_ej_25()
//secuen1.vid_42_ejercicio_3_ej_26()
//secuen1.vid_43_ejercicio_4_ej_27()
//secuen1.vid_44_ejercicio_5_ej_28()
//secuen1.vid_45_ejercicio_6_ej_29()
//secuen1.vid_46_ejercicio_7_ej_30()
//secuen1.ejercicio_31()