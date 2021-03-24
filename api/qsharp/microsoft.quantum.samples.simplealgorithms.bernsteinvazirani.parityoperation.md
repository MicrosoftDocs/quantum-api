---
uid: Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani.ParityOperation
title: ParityOperation function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani
qsharp.name: ParityOperation
qsharp.summary: "Given a bitstring \U0001D45F⃗ = (r₀, …, rₙ₋₁), returns an operation implementing\ra unitary \U0001D448 that acts on \U0001D45B + 1 qubits as\r\r       \U0001D448 |\U0001D465〉|\U0001D466〉 = |\U0001D465〉|\U0001D466 ⊕ \U0001D453(\U0001D465)〉,\r\rwhere \U0001D453(\U0001D465) = Σᵢ \U0001D465ᵢ \U0001D45Fᵢ mod 2."
---

# ParityOperation function

Namespace: [Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani)

Package: [SimpleAlgorithms](https://nuget.org/packages/SimpleAlgorithms)


Given a bitstring 𝑟⃗ = (r₀, …, rₙ₋₁), returns an operation implementinga unitary 𝑈 that acts on 𝑛 + 1 qubits as       𝑈 |𝑥〉|𝑦〉 = |𝑥〉|𝑦 ⊕ 𝑓(𝑥)〉,where 𝑓(𝑥) = Σᵢ 𝑥ᵢ 𝑟ᵢ mod 2.

```qsharp
function ParityOperation (pattern : Bool[]) : ((Qubit[], Qubit) => Unit)
```


## Input

### pattern : [Bool](xref:microsoft.quantum.lang-ref.bool)[]

The bitstring 𝑟⃗ used to define the function 𝑓.



## Output : ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit) 

An operation implementing 𝑈.