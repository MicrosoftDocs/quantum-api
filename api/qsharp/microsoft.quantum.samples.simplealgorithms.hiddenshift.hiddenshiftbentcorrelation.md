---
uid: Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift.HiddenShiftBentCorrelation
title: HiddenShiftBentCorrelation operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift
qsharp.name: HiddenShiftBentCorrelation
qsharp.summary: "Correlation-based algorithm to solve the hidden shift problem for bent functions.\rThe problem is to identify an unknown shift \U0001D460 of the arguments of two Boolean functions\r\U0001D453 and \U0001D454 that are promised to satisfy the relation \U0001D454(\U0001D465) = \U0001D453(\U0001D465 ⊕ \U0001D460) for all \U0001D465.\rNote that the promise about the functions \U0001D453 and \U0001D454 to be bent functions is assumed,\ri.e., they both have a flat Fourier (Walsh–Hadamard) spectra. Input to this algorithm\rare implementations \U0001D448_g of the Boolean function \U0001D454 and \U0001D448_f^*, an implementation of\rdual bent function of the function \U0001D453. Both functions are given via phase encoding."
---

# HiddenShiftBentCorrelation operation

Namespace: [Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift)

Package: [SimpleAlgorithms](https://nuget.org/packages/SimpleAlgorithms)


Correlation-based algorithm to solve the hidden shift problem for bent functions.The problem is to identify an unknown shift 𝑠 of the arguments of two Boolean functions𝑓 and 𝑔 that are promised to satisfy the relation 𝑔(𝑥) = 𝑓(𝑥 ⊕ 𝑠) for all 𝑥.Note that the promise about the functions 𝑓 and 𝑔 to be bent functions is assumed,i.e., they both have a flat Fourier (Walsh–Hadamard) spectra. Input to this algorithmare implementations 𝑈_g of the Boolean function 𝑔 and 𝑈_f^*, an implementation ofdual bent function of the function 𝑓. Both functions are given via phase encoding.

```qsharp
operation HiddenShiftBentCorrelation (Ufstar : (Qubit[] => Unit), Ug : (Qubit[] => Unit), n : Int) : Result[]
```


## Input

### Ufstar : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 

A quantum operation that implements $U_f^*:\ket{x}\mapsto (-1)^{f^*(x)} \ket{x}$,where $f^*$ is a Boolean function, $x$ is an $n$ bit register and $y$ is a single qubit.


### Ug : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit) 

A quantum operation that implements $U_g:\ket{x}\mapsto (-1)^{g(x)} \ket{x}$,where $g$ is a Boolean function that is shifted by unknown $s$ from $f$, and $x$ isan $n$ bit register.


### n : [Int](xref:microsoft.quantum.lang-ref.int)

The number of bits of the input register |𝑥〉.



## Output : __invalid<Result>__[]

An array of type `Bool[]` which encodes the bit representation of the hidden shift.

## References

- [*Martin Roetteler*,  Proc. SODA 2010, ACM, pp. 448-457, 2010](https://doi.org/10.1137/1.9781611973075.37)