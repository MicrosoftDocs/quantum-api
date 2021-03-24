---
uid: Microsoft.Quantum.Samples.IntegerFactorization
title: Microsoft.Quantum.Samples.IntegerFactorization namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.IntegerFactorization
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.IntegerFactorization namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplyOrderFindingOracle](xref:Microsoft.Quantum.Samples.IntegerFactorization.ApplyOrderFindingOracle) |Interprets `target` as encoding unsigned little-endian integer k and performs transformation |k⟩ ↦ |gᵖ⋅k mod N ⟩ where p is `power`, g is `generator` and N is `modulus`.
|[EstimateFrequency](xref:Microsoft.Quantum.Samples.IntegerFactorization.EstimateFrequency) |Estimates the frequency of a generator in the residue ring Z mod `modulus`.
|[EstimatePeriod](xref:Microsoft.Quantum.Samples.IntegerFactorization.EstimatePeriod) |Finds a multiplicative order of the generator in the residue ring Z mod `modulus`.
|[FactorSemiprimeInteger](xref:Microsoft.Quantum.Samples.IntegerFactorization.FactorSemiprimeInteger) |Uses Shor's algorithm to factor the parameter `number`

## Functions

| Name | Summary |
|------|---------|
|[MaybeFactorsFromPeriod](xref:Microsoft.Quantum.Samples.IntegerFactorization.MaybeFactorsFromPeriod) |Tries to find the factors of `modulus` given a `period` and `generator`.
|[PeriodFromFrequency](xref:Microsoft.Quantum.Samples.IntegerFactorization.PeriodFromFrequency) |Find the period of a number from an input frequency.

<!-- /summaries -->
