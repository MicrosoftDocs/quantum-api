---
uid: Microsoft.Quantum.Samples.UnitTesting.CCZ1
title: CCZ1 operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: CCZ1
qsharp.summary: Implementation of Double Controlled Z gate in terms of exponents of Pauli operators
---

# CCZ1 operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Implementation of Double Controlled Z gate in terms of exponents of Pauli operators

```qsharp
operation CCZ1 (qubit1 : Qubit, qubit2 : Qubit, qubit3 : Qubit) : Unit is Adj + Ctl
```


## Input

### qubit1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### qubit2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### qubit3 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Uses 7 T gates, 10 CNOTs and has T depth 5.Note that CCZ is completely symmetric with respect to the qubit orderbecause it acts as |abc⟩ ↦ (-1)^(a∧b∧c)|abc⟩ on computation basis states.#Recall that ExpFrac used in the circuit below is an exponent of therespective multi-qubit Pauli gate times numerator Pi() i /2^{n-1}It is a primitive gate implemented by Quantum.Intrinsics