---
uid: Microsoft.Quantum.Samples.UnitTesting.CCNOT4
title: CCNOT4 operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: CCNOT4
qsharp.summary: >-
  Implementation of the CCNOT gate using the decomposition of CCZ into the exponents of
  tensor products of Z operators
---

# CCNOT4 operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Implementation of the CCNOT gate using the decomposition of CCZ into the exponents oftensor products of Z operators

```qsharp
operation CCNOT4 (control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Input

### control1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### control2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Uses 7 T gates, 10 CNOTs and two Hadamard gates and has T depth 5