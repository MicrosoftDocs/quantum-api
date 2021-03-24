---
uid: Microsoft.Quantum.Samples.ReconstructOracleParameters
title: ReconstructOracleParameters operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples
qsharp.name: ReconstructOracleParameters
qsharp.summary: Reconstructs the parameters of the oracle in a single query
---

# ReconstructOracleParameters operation

Namespace: [Microsoft.Quantum.Samples](xref:Microsoft.Quantum.Samples)

Package: [qsharp](https://nuget.org/packages/qsharp)


Reconstructs the parameters of the oracle in a single query

```qsharp
operation ReconstructOracleParameters (N : Int, oracle : ((Qubit[], Qubit) => Unit)) : Bool[]
```


## Input

### N : [Int](xref:microsoft.quantum.lang-ref.int)

The number of qubits in the input register N for the function f


### oracle : ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit) 

A quantum operation which implements the oracle |x⟩|y⟩ -> |x⟩|y ⊕ f(x)⟩, wherex is an N-qubit input register, y is a 1-qubit answer register, and f is a Boolean function.The function f implemented by the oracle can be represented asf(x₀, …, xₙ₋₁) = Σᵢ (rᵢ xᵢ + (1 - rᵢ)(1 - xᵢ)) modulo 2 for some bit vector r = (r₀, …, rₙ₋₁).



## Output : [Bool](xref:microsoft.quantum.lang-ref.bool)[]

A bit vector r which generates the same oracle as the given oneNote that this doesn't have to be the same bit vector as the one used to initialize the oracle!