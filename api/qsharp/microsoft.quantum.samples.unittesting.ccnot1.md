---
uid: Microsoft.Quantum.Samples.UnitTesting.CCNOT1
title: CCNOT1 operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: CCNOT1
qsharp.summary: >-
  Implementation of CCNOT gate over the Clifford+T gate set,
  according to Nielsen and Chuang Fig. 4.9
---

# CCNOT1 operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Implementation of CCNOT gate over the Clifford+T gate set,according to Nielsen and Chuang Fig. 4.9

```qsharp
operation CCNOT1 (control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Input

### control1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### control2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

The circuit corresponding to this implementation uses7 T gates, 5 CNOT gates, 2 Hadamard gates, and 1 S gate and has T-depth 5.

## References

- [ *Michael A. Nielsen , Isaac L. Chuang*,  Quantum Computation and Quantum Information ](http://doi.org/10.1017/CBO9780511976667)