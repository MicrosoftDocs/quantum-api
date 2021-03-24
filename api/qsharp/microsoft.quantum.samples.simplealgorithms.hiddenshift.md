---
uid: Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift
title: Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[HiddenShiftBentCorrelation](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift.HiddenShiftBentCorrelation) |Correlation-based algorithm to solve the hidden shift problem for bent functions.The problem is to identify an unknown shift 𝑠 of the arguments of two Boolean functions𝑓 and 𝑔 that are promised to satisfy the relation 𝑔(𝑥) = 𝑓(𝑥 ⊕ 𝑠) for all 𝑥.Note that the promise about the functions 𝑓 and 𝑔 to be bent functions is assumed,i.e., they both have a flat Fourier (Walsh–Hadamard) spectra. Input to this algorithmare implementations 𝑈_g of the Boolean function 𝑔 and 𝑈_f^*, an implementation ofdual bent function of the function 𝑓. Both functions are given via phase encoding.
|[RunHiddenShift](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift.RunHiddenShift) |
|[RunHiddenShiftBentCorrelation](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift.RunHiddenShiftBentCorrelation) |

## Functions

| Name | Summary |
|------|---------|
|[InnerProductBentFunction](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift.InnerProductBentFunction) |
|[ShiftedInnerProductBentFunction](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.HiddenShift.ShiftedInnerProductBentFunction) |

<!-- /summaries -->
