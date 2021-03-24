---
uid: Microsoft.Quantum.Samples
title: Microsoft.Quantum.Samples namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples
qsharp.summary: ''
---

# Microsoft.Quantum.Samples namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplyProductWithNegationFunction](xref:Microsoft.Quantum.Samples.ApplyProductWithNegationFunction) |A quantum oracle which implements the following function: f(x₀, …, xₙ₋₁) = Σᵢ (rᵢ xᵢ + (1 - rᵢ)(1 - xᵢ)) modulo 2 for a given bit vector r = (r₀, …, rₙ₋₁).
|[ApplyZZ](xref:Microsoft.Quantum.Samples.ApplyZZ) |Given two qubits and a rotation angle, rotates the given qubits about ZZ.
|[HiddenShiftBentCorrelation](xref:Microsoft.Quantum.Samples.HiddenShiftBentCorrelation) |Correlation-based algorithm to solve the hidden shift problem for bent functions.The problem is to identify an unknown shift 𝑠 of the arguments of two Boolean functions𝑓 and 𝑔 that are promised to satisfy the relation 𝑔(𝑥) = 𝑓(𝑥 ⊕ 𝑠) for all 𝑥.Note that the promise about the functions 𝑓 and 𝑔 to be bent functions is assumed,i.e., they both have a flat Fourier (Walsh–Hadamard) spectra. Input to this algorithmare implementations 𝑈_g of the Boolean function 𝑔 and 𝑈_f^*, an implementation ofdual bent function of the function 𝑓. Both functions are given via phase encoding.
|[PrepareAllOnes](xref:Microsoft.Quantum.Samples.PrepareAllOnes) |Given a register in the all-zeros state, prepares an all-ones state by flipping every qubit.
|[PrepareUniform](xref:Microsoft.Quantum.Samples.PrepareUniform) |Given a register in the all-zeros state, prepares a uniform superposition over all basis states.
|[ReconstructOracleParameters](xref:Microsoft.Quantum.Samples.ReconstructOracleParameters) |Reconstructs the parameters of the oracle in a single query
|[ReflectAboutAllOnes](xref:Microsoft.Quantum.Samples.ReflectAboutAllOnes) |Reflects about the all-ones state.
|[ReflectAboutMarked](xref:Microsoft.Quantum.Samples.ReflectAboutMarked) |Reflects about the basis state marked by a given index. This operation defines what input we are trying to find in the main search.
|[ReflectAboutUniform](xref:Microsoft.Quantum.Samples.ReflectAboutUniform) |Reflects about the uniform superposition state.
|[RunAlgorithm](xref:Microsoft.Quantum.Samples.RunAlgorithm) |Instantiates the oracle and runs the parameter restoration algorithm.
|[RunHiddenShift](xref:Microsoft.Quantum.Samples.RunHiddenShift) |Runs the hidden shift program.
|[SampleRandomNumber](xref:Microsoft.Quantum.Samples.SampleRandomNumber) |Samples a random number by measuring a register of qubits in parallel.
|[SearchForMarkedInput](xref:Microsoft.Quantum.Samples.SearchForMarkedInput) |This operation applies Grover's algorithm to search all possible inputs to an operation to find a particular marked state.
|[SimulateIsingEvolution](xref:Microsoft.Quantum.Samples.SimulateIsingEvolution) |Sweeps from an transverse field to an Ising model using a linear schedule.

## Functions

| Name | Summary |
|------|---------|
|[InnerProductBentFunction](xref:Microsoft.Quantum.Samples.InnerProductBentFunction) |
|[NIterations](xref:Microsoft.Quantum.Samples.NIterations) |Returns the number of Grover iterations needed to find a single marked item, given the number of qubits in a register.
|[ShiftedInnerProductBentFunction](xref:Microsoft.Quantum.Samples.ShiftedInnerProductBentFunction) |

<!-- /summaries -->
