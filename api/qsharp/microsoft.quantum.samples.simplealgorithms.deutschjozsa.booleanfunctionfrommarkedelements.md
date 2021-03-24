---
uid: Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa.BooleanFunctionFromMarkedElements
title: BooleanFunctionFromMarkedElements function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa
qsharp.name: BooleanFunctionFromMarkedElements
qsharp.summary: "Constructs an operation representing a query to a boolean function\r\U0001D453(\U0001D465⃗) for a bitstring \U0001D465⃗, such that \U0001D453(\U0001D465⃗) = 1 if and only if the integer\r\U0001D458 represented by \U0001D465⃗ is an element of a given array."
---

# BooleanFunctionFromMarkedElements function

Namespace: [Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa)

Package: [SimpleAlgorithms](https://nuget.org/packages/SimpleAlgorithms)


Constructs an operation representing a query to a boolean function𝑓(𝑥⃗) for a bitstring 𝑥⃗, such that 𝑓(𝑥⃗) = 1 if and only if the integer𝑘 represented by 𝑥⃗ is an element of a given array.

```qsharp
function BooleanFunctionFromMarkedElements (nQubits : Int, markedElements : Int[]) : ((Qubit[], Qubit) => Unit)
```


## Input

### nQubits : [Int](xref:microsoft.quantum.lang-ref.int)

The number of qubits to be used in representing the query operation.


### markedElements : [Int](xref:microsoft.quantum.lang-ref.int)[]

An array of the elements {𝑘ᵢ} for which 𝑓 should return 1.



## Output : ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit) 

An operation representing the unitary 𝑈 |𝑧〉 |𝑘〉 = |𝑧 ⊕ 𝑥ₖ〉 |𝑘〉.