Funcion vid_12_suma_ej_1()
	Definir resultado,num1,num2 Como Entero;
	
	Escribir "Dijite un numero: ";
	leer num1;
	Escribir "Dijites otro numero: ";
	leer num2;
	resultado=num1 + num2;
	Escribir "El resultado es: ",resultado;
FinFuncion

Funcion vid_9_operadores_racionales_ej_2()
	Definir resultado Como Logico;
	Definir a,b,c Como Entero;
	Escribir "Dijite el valor de a: ";
	Leer a;
	Escribir "Dijite el valor de b: ";
	Leer b;
	Escribir "Dijite el valor de c: ";
	Leer c;
	resultado=a+b>=c;
	Escribir "el resultado es: ", resultado;
FinFuncion

Funcion vid_14_operadoes_logicos_ej_3() 
	Definir resultado Como Logico;
	Definir a,b,c Como Entero;
	Escribir "Dijite el valor de a: ";
	Leer a;
	Escribir "Dijite el valor de b: ";
	Leer b;
	Escribir "Dijite el valor de c: ";
	Leer c;
	resultado= ((a<b))y(b<c);
	Escribir "el resultado es: ", resultado;
FinFuncion

Funcion vid_16_operadores_aritmeticos_ej_4()
	definir a,b,c,resultado como reales;
	Escribir "Dijite el valor de A: ";
	Leer a;
	Escribir "Dijite el valor de B: ";
	Leer b;
	Escribir "Dijite el valor de C: ";
	Leer c;
	resultado=(-b+rc(b^2-4*a*c))/(2*a);
	Escribir "el resultado es: ",resultado;
FinFuncion 

Funcion vid_17_operanes_ej_5()
	Definir a,b Como Real;
	Definir resultado Como Logico;
	
	Escribir "Dijite el valor de a: ";
	Leer a;
	Escribir "Dijite el valor de b: ";
	Leer b;
	resultado=((3+5*8)<3 y ((-6/3*4)+2<2)) o (a>b);
	
	Escribir "el resultado es: ", resultado;
FinFuncion

Funcion vid_18_intercambio_de_valores_ej_6()
	Definir a,b,aux Como Entero;
	Escribir "Dijite el valor de a: ";
	Leer a;
	Escribir "Dijite el valor de b: ";
	Leer b;
	
	aux=a;
	a=b;
	b=aux;
	
	Escribir "El nuevo valor de a es: ",a;
	Escribir "El nuevo valor de b es: ",b;
FinFuncion

Funcion vid_19_diagrma_de_flujo_ej_7() 
	definir a,b,c,resultado como entero;
	a = 10;
	b = 20;
	Escribir "digite un numero: ";
	Leer c;
	resultado=a+b+c;
	Escribir "el resultado es: ",resultado;
FinFuncion

Funcion vid_20_diagrma_estructurado_ej_8() 
	definir a,b,resultado como entero;
	a = 10;
	Escribir "Digite un numero: ";
	Leer b;
	resultado = a+b;
	Escribir "El resultado es: ",resultado;
FinFuncion

Funcion vid_22_ejercicio1_ej_9()
	Definir horas,min,seg Como Entero;
	Definir hs, ms, total Como Entero;
	
	Escribir "digite las horas: ";
	leer horas;
	Escribir "digite los minutos ";
	leer min;
	Escribir "digite los segundos ";
	leer seg;
	hs=horas*3600;
	ms=min;
	total=hs+ms+seg;
	Escribir "los segundos equivalentes son: ",total;
FinFuncion

Funcion vid_23_ejercicio_2_ej_10()
	Definir radio,area,lon Como Real;
	Escribir  "digite el valo del radio: ";
	
	leer radio;
	area=pi*radio^2;
	lon=2*pi*radio;
	
	Escribir "El area de la circunferencia es: ",area;
	Escribir "la longitud es: ",lon;
FinFuncion

Funcion vid_24_ejercicio_3_ej_11()
	
	Definir num_hombres, num_mujeres Como Entero;
	Definir total_studens Como Entero;
	Definir porcentajeH , porcentajeM Como real;
	
	Escribir "Digite cantidad de hombres: ";
	Leer num_hombres;
	Escribir  "Digite cantidad de mujeres: ";
	Leer num_mujeres;

	total_studens <- num_hombres+ num_mujeres;
	porcentajeH <- trunc(num_hombres / total_studens * 100);
	porcentajeM <- trunc(num_mujeres / total_studens * 100);
	
	Escribir "El porcentaje de hombres es: ",porcentajeH,"%";
	Escribir  "El porcentaje de  mujeres es: ", porcentajeM,"%";
	
FinFuncion

Funcion  vid_25_ejercicio_4_ej_12()
	
	Definir a,b,c Como Entero;
	Definir time_testa,time_testb,time_testc Como Entero;
	Definir horas, minutos Como Entero; 
	Definir Total_time Como Entero;
	
	
	Escribir "Ingrese la cantidad de test A:";
	Leer a;
	Escribir  "Ingrese la cantidad de test b:";
	Leer b;
	Escribir "Infrese la cantidad de test c :";
	Leer c;

	time_testa <- a * 5 ;
	time_testb <-b * 8;
	time_testc <-c * 6;
	
	Total_time<- time_testa + time_testb + time_testc;
	horas <- trunc(Total_time / 60);
	minutos <- Total_time mod 60; 
	
	Escribir " Se tardara: ",horas," horas y ",minutos," minutos  " ;
FinFuncion
Funcion vid_26_ejercicio_5_ej_13()
		
		Definir Precio_inicial Como Entero;
		Definir  Total_del_pago,descuento  Como Real;
	
		Escribir "Ingrese el precio" ;
		Leer Precio_inicial;

		descuento <- Precio_inicial * 15 / 100;
		Total_del_pago <- Precio_inicial - descuento;
	
		Escribir "El total a pagar aplicando con decuento es :",Total_del_pago;
		
FinFuncion

Funcion  vid_27_ejercicio_6_ej_14()
	Definir  c_examen, c_trabajo_f Como real;
	Definir p1, p2 , p3,  Promedio_p  Como real;
	Definir Promedio_tP,po_ex,po_tbjf Como Real;
	Definir Promedio_total Como Real;
	
	Escribir "Ingrese Nota del Primer Parcial: ";
	Leer p1;
	Escribir "Ingrese Nota del Segundo Parcial: ";
	Leer p2;
	Escribir "Ingrese Nota del Tercer Parcial: ";
	Leer p3;
	
	Promedio_p <- (p1 + p2 + p3) / 3 ;
	
	Promedio_tP <- Promedio_p * 0.55;
	
	Escribir  "Ingrese nota del Examen final: ";
	Leer  c_examen;
	
	po_ex <- c_examen * 0.3;
	
	Escribir  "ingrese nota del trabajo final: ";
	Leer c_trabajo_f;
	
	po_tbjf <- c_trabajo_f * 0.15 ;
	
	Promedio_total<-  Promedio_tP + po_ex + po_tbjf;
	
	Escribir "El promedio del estudiante es: ", Promedio_total;
	
	
FinFuncion

Funcion vid_29_ejercicio_1_ej_15() 	  
	
	Definir num Como Entero;
		
		Escribir "Ingrese un numero :";
		Leer num;
		
		si num mod 2 = 0 Entonces
			Escribir " El numero: ",num," es par ";
		SiNo
			Escribir " El numero: " ,num," es impar ";
			
		FinSi
		
FinFuncion

Funcion vid_30_ejercicio_2_ej_16()
		Definir  n1,n2,n3,pro Como reales;
		
		Escribir "Digite 3 calificaciones ";
		Leer n1,n2,n3;
		pro <- (n1 + n2 + n3) / 3;
		
		si pro >= 70 Entonces
			Escribir "Felicidades has Aprovado con: ",pro ;
		SiNo
			Escribir "Reprovado esfuerzate mas: ", pro;
		FinSi
FinFuncion

Funcion vid_31_ejercicio_3_ej_17() 
		Definir V_SD,V_CD,T_AP Como Real;
	
		Escribir "Ingrese el precio Inicial: ";
		Leer  V_SD;

		V_CD<- V_SD * 20 / 100;
		
		T_AP <- V_SD - v_cd;
	
		si V_SD > 100 Entonces
			Escribir "El total a pagar es: ",T_AP;
		SiNo
			Escribir  "El total a pagar es: ",V_SD;
		FinSi
		
FinFuncion
Funcion vid_32_ejercicio_4_ej_18() 
		Definir  num1, num2 Como Entero;
		Definir rel Como Entero;
		
		Escribir "Digite el primer numero: ";
		Leer num1;
		Escribir  "Digitar el segundo numero: ";
		Leer  num2;
		si num1=num2 Entonces
			rel <- num1 * num2; 
		SiNo 
			si num1>num2 Entonces
				rel <- num1 - num2;
			SiNo
				rel <- num1+ num2;
				
			FinSi
			
		FinSi
		Escribir "El resultado es : ",rel;
FinFuncion
Funcion vid_33_ejercicio_5_ej_19()
	Definir num1,num2,num3 Como Entero;
	
	Escribir " Digite 3 numeros: ";
	Leer num1,num2,num3;
	
	si num1 > num2 y num1 > num3 Entonces
		Escribir "El mayor es: ", num1;
	SiNo 
		si num2 > num1 y num2 > num3 Entonces
			
			Escribir "El mayor es:", num2;
		sino 
			Escribir "El mayor es: ",num3 ;
			
		FinSi
	FinSi
FinFuncion
Funcion vid_34_ejercicio_6_ej_20()
		Definir  Preciok,precioI,KilosM como real ;
		Definir  Descuento, precio_final Como real ;
		
		Escribir "Definir precio de kilos :";
		Leer Preciok ;
		Escribir  "Introduzca los kilos: ";
		Leer  KilosM ;
		
		precioI <- Preciok * KilosM;
		
		si KilosM >= 0 y KilosM <= 2 Entonces
			Descuento <- 0;
		SiNo
			si KilosM >= 2.01 y KilosM <= 5 Entonces
				Descuento <- precioI * 0.1;
			SiNo
				si KilosM >= 5.01 y KilosM <= 10 Entonces
					Descuento <-  precioI * 0.15;
				SiNo
					Descuento <- precioI * 0.2;
				FinSi
			FinSi
			
		FinSi 
		precio_final <- precioI - Descuento;
		
		Escribir "El valor a pagar es: ", precio_final," $" ;
		
FinFuncion

Funcion vid_35_ejercicio_7_ej_21()
	
	Definir num Como Entero;
	
	Escribir "Digite un día de la semana (1/7) ";
	Leer  num;
	
	Segun num Hacer
		1: Escribir "Lunes";
		2: Escribir "Martes";
		3: Escribir "Miercoles";
		4: Escribir "Jueves";
		5: Escribir "Viernes";
		6: Escribir "Sabado";
		7: Escribir "Domingo";
		De Otro Modo:
			Escribir "Error, no existe día para ese numero ";

	FinSegun
	
FinFuncion 
Funcion vid_36_ejercicio_8_ej_22()

Definir dec Como Entero;

Escribir "Digite una decada:";
Leer dec;

Segun dec Hacer
	10: Escribir "Bodas de Hojalata";
	20: Escribir "Bodas de Porcelana";
	30: Escribir "Bodas de Perlas";
	40: Escribir "Bodas de Rubí";
	50: Escribir "Bodas de Oro";
	60: Escribir "Bodas de Diamante";
	De Otro Modo:
		Escribir "La decada no existe";
FinSegun
FinFuncion

Funcion vid_37_ejercicio_9_ej_23()
	Definir op Como Entero;
	
	Escribir "MENU";
	Escribir "1. Elevar un numero a potencia X";
	Escribir "2. Sacar la raiz cuadrada de un numero";
	Escribir "3. Salir";
	Escribir "Digite un opción: ";
	Leer op;
	Segun op Hacer
		1:Definir num,pot,resultado como real;
			Escribir "Digite un numero: ";
			Leer num;
			Escribir "Digite una potencia";
			Leer pot;
			resultado<- num^pot;
			Escribir "El resultado es: ",resultado;
	
		2: Definir num , resultado como reales ;
			Escribir "Digite un numero:";
			Leer num;
			Resultado<- rc(num);
			Escribir "El resultado es: ",resultado;
		3: Escribir "Usted a salido del menu, gracias por preferinos...";
			
		De Otro Modo:
			Escribir "Se equivoco de menu ";
	FinSegun
	
FinFuncion
//Ciclos
Funcion vid_40_ejercicio_1_ej_24()
	Definir n,suma,i Como Entero;
	
	Escribir  "Digite la cantidad de numeros a sumarse: ";
	Leer n;
	suma <- 0;
	para i<-1 Hasta n Hacer
		suma <- suma + i;
	FinPara
	Escribir "La suma es: ",suma;
FinFuncion

Funcion  vid_41_ejercicio_2_ej_25()
	Definir sum_par,sum_impar,i Como Entero;
	sum_par <- 0;
	sum_impar <- 0;
	Para i <- 2 hasta 49 Con Paso 1 Hacer
		si i mod 2 = 0 Entonces
			Sum_par <- sum_par + i;
		SiNo
			sum_impar <- sum_impar + i;
		FinSi
	FinPara
	Escribir "La suma de pares es: ",sum_par;
	Escribir  "La suma de impares es: ",sum_impar;
	
FinFuncion

Funcion vid_42_ejercicio_3_ej_26()
	
	Definir num_neg,num_po,num_neu Como Enteros;
	Definir  i, num Como Entero;
	num_neg <- 0;
	num_po <- 0 ;
	num_neu <- 0;
	
	Para i<-1  Hasta 10 Con Paso 1 Hacer
		Escribir i, ". Digite un Numero: ";
		Leer num;
		si num > 0 Entonces
			num_po <- num_po + 1;
		SiNo
			si num = 0 Entonces
				num_neu<- num_neu+1;
			SiNo
				num_neg<- num_neg + 1 ;
			FinSi
		FinSi
	FinPara
	Escribir "La cantidad de numeros positivos son: ",num_po;
	Escribir  "La cantidad de numeros neutros son: ",num_neu;
	Escribir  "La cantidad de numeros negativos son: ",num_neg;
FinFuncion

Funcion vid_43_ejercicio_4_ej_27()
	Definir i, suma Como Entero;
	Definir  ca_ba,cali Como Entero;
	Definir  ca_pro Como Real;
	suma <- 0;
	ca_ba <- 99999;
	
	Para i <- 1 hasta 10 Con Paso  1 hacer 
		Escribir i,". Digite una calificación: ";
		Leer cali;
		
		suma <- suma + cali;
		
		si cali<ca_ba Entonces
			ca_ba <- cali;
		FinSi
	FinPara
	ca_pro <- suma / 10;
	Escribir "El promedio es :",ca_pro;
	Escribir  "Y la calificaón mas baja es: ",ca_ba;
	
FinFuncion

Funcion vid_44_ejercicio_5_ej_28()
	Definir i,factorial Como Entero;
	Definir num Como Entero;
	Repetir 
	Escribir  "Escriba un numero: ";
	Leer num;
	
Hasta Que num>=0

	i<-1 ;
	Factorial <- 1;
	Mientras i<=num Hacer
		factorial <- factorial * i;
		i <- i + 1;
	FinMientras
	Escribir "El factorial es: ",factorial;
	
FinFuncion
Funcion vid_45_ejercicio_6_ej_29()
	Definir i, suma Como Entero;
	Definir num, su_fac Como Entero;
	
	i<-1;
	suma <- 0;
	Escribir  "Ingrese la cantidad de elementos: ";
	Leer num;
	
	Mientras i <= num Hacer
		suma <- suma + i^2;
		i<- i + 1;
	FinMientras
	Escribir "La suma de los cuadrados ",num," es: ",suma;
FinFuncion

Funcion vid_46_ejercicio_7_ej_30()
	Definir n_e , i, num2 Como Entero;
	Definir cont_par, suma_par,suma_impar,cont_impar Como Entero;
	Definir pro_impar Como Real;
	Escribir  "Digite la cantidad de elementos a ingresar: ";
	Leer n_e;
	i<-1;
	suma_par<- 0;
	cont_par<- 0;
	suma_impar <-0;
	cont_impar <-0;
	
	Mientras i <= n_e Hacer
		Escribir i,". Digite un numero:";
		Leer num2;
		
		Si num2 mod 2 = 0 Entonces
			suma_par <- suma_par + num2;                           
			cont_par<- cont_par+1;
		SiNo
			suma_impar <- suma_impar + num2;
			cont_impar <- cont_impar + 1;
			
		FinSi
		i<- i + 1;
	FinMientras
	si cont_par = 0 Entonces
		Escribir "No se han ingresado numeros pares: ";
	SiNo
		Escribir "La suma de los numeros pares es: ",suma_par;
		Escribir  "El conteo de los numeros pares es: ",cont_par;
	FinSi
	si cont_impar = 0 Entonces
		Escribir "No se an digitado numeros impares: ";
	SiNo
		pro_impar<- suma_impar / cont_impar ;
		Escribir "El promerdio de impares es: ",pro_impar;
	FinSi
	
FinFuncion
Funcion ejercicio_31
	Definir horas,num_horas,num_personas,tarifa Como Real;
	Definir salario, salario_total Como Real;
	
	Repetir
		// Buscamos la solucion de horas
		Escribir 'Ingrese el numero de horas: ';
		Leer num_horas;
		Escribir "Ingrese el costo de horas: ";
		Leer horas;
	Hasta Que num_horas <= 0
	tarifa <- num_horas * horas;
	salario <- tarifa;
	salario_total <- salario/5;
	Escribir "El salario total es: ",salario_total;
FinFuncion




Algoritmo tarea

//vid_12_suma_ej_1();
//vid_9_operadores_racionales_ej_2();
//vid_14_operadoes_logicos_ej_3();
//vid_16_operadores_aritmeticos_ej_4();
//vid_17_operanes_ej_5();
//vid_18_intercambio_de_valores_ej_6();
//vid_19_diagrma_de_flujo_ej_7() ;
//vid_20_diagrma_estructurado_ej_8() ;
//vid_22_ejercicio1_ej_9();
//vid_23_ejercicio_2_ej_10();
//vid_24_ejercicio_3_ej_11();
//vid_25_ejercicio_4_ej_12();
//vid_26_ejercicio_5_ej_13();
//vid_27_ejercicio_6_ej_14();
//vid_29_ejercicio_1_ej_15(); 	
//vid_30_ejercicio_2_ej_16();	
//vid_31_ejercicio_3_ej_17();
//vid_32_ejercicio_4_ej_18();
//vid_33_ejercicio_5_ej_19();
//vid_34_ejercicio_6_ej_20();
//vid_35_ejercicio_7_ej_21();	
//vid_36_ejercicio_8_ej_22();
//vid_37_ejercicio_9_ej_23();
//vid_40_ejercicio_1_ej_24();
//vid_41_ejercicio_2_ej_25();
//vid_42_ejercicio_3_ej_26();
//vid_43_ejercicio_4_ej_27();
//vid_44_ejercicio_5_ej_28();
//vid_45_ejercicio_6_ej_29();
//vid_46_ejercicio_7_ej_30();
//ejercicio_31
	
FinAlgoritmo
