---
uid: Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit.SpecialRzFracOperations
title: SpecialRzFracOperations user defined type
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit
qsharp.name: SpecialRzFracOperations
qsharp.summary: ''
---

# SpecialRzFracOperations user defined type

Namespace: [Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit](xref:Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)




```qsharp

newtype SpecialRzFracOperations = (Rz11Frac : (Qubit => Unit is Adj + Ctl), Rz12Frac : (Qubit => Unit is Adj + Ctl), Rz32Frac : (Qubit => Unit is Adj + Ctl), GlobalPhaseFrac : ((Int, Int) => Unit is Adj + Ctl), RzFracGeneric : ((Int, Int, Qubit) => Unit is Adj + Ctl));
```



## Named Items

### Rz11Frac : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### Rz12Frac : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### Rz32Frac : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### GlobalPhaseFrac : ([Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### RzFracGeneric : ([Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

