---
uid: Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani
title: Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[LearnParityViaFourierSampling](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani.LearnParityViaFourierSampling) |LearnParityViaFourierSampling implements the Bernstein-Vazirani quantum algorithm.This algorithm computes for a given Boolean function that is promised to bea parity 𝑓(𝑥₀, …, 𝑥ₙ₋₁) = Σᵢ 𝑟ᵢ 𝑥ᵢ a result in form ofa bit vector (𝑟₀, …, 𝑟ₙ₋₁) corresponding to the parity function.Note that it is promised that the function is actually a parity function.
|[RunBernsteinVazirani](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani.RunBernsteinVazirani) |

## Functions

| Name | Summary |
|------|---------|
|[ParityOperation](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.BernsteinVazirani.ParityOperation) |Given a bitstring 𝑟⃗ = (r₀, …, rₙ₋₁), returns an operation implementinga unitary 𝑈 that acts on 𝑛 + 1 qubits as       𝑈 |𝑥〉|𝑦〉 = |𝑥〉|𝑦 ⊕ 𝑓(𝑥)〉,where 𝑓(𝑥) = Σᵢ 𝑥ᵢ 𝑟ᵢ mod 2.

<!-- /summaries -->
